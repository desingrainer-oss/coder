"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BLOG_CATEGORIES } from "@/data/blogCategories";
import {
  AdminField,
  AdminInput,
  AdminTextarea,
  AdminSelect,
  AdminCard,
} from "@/components/admin/AdminField";
import Icon from "@/components/Icon";

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminBlogForm({ post = null }) {
  const router = useRouter();
  const isEdit = Boolean(post);

  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "salesforce",
    author: post?.author || "Equipo Coders Solution",
    publishedAt: post?.publishedAt || new Date().toISOString().slice(0, 10),
    status: post?.status || "draft",
    seoTitle: post?.seoTitle || "",
    seoDescription: post?.seoDescription || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showSeo, setShowSeo] = useState(false);

  const update = (field, value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && !isEdit) {
        next.slug = slugify(value);
      }
      if (field === "title" && !prev.seoTitle) {
        next.seoTitle = value;
      }
      if (field === "excerpt" && !prev.seoDescription) {
        next.seoDescription = value;
      }
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const url = isEdit ? `/api/blog/${post.id}` : "/api/blog";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/blog");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Error al guardar");
    }
    setSaving(false);
  };

  const wordCount = form.content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        {/* Columna principal — editor */}
        <div className="flex flex-col gap-5">
          <AdminCard>
            <AdminField label="Título del artículo">
              <AdminInput
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Escribe un título atractivo..."
                className="text-[15px] font-semibold"
                required
              />
            </AdminField>

            <div className="mt-4">
              <AdminField
                label="URL (slug)"
                hint={`Se publicará en /blog/${form.slug || "..."}`}
              >
                <AdminInput
                  value={form.slug}
                  onChange={(e) => update("slug", e.target.value)}
                  className="font-mono text-[13px]"
                  required
                />
              </AdminField>
            </div>
          </AdminCard>

          <AdminCard title="Extracto">
            <AdminTextarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              rows={3}
              placeholder="Resumen breve que aparece en el listado del blog..."
              required
            />
            <p className="text-[11px] text-text-3 mt-2 text-right">
              {form.excerpt.length} caracteres
            </p>
          </AdminCard>

          <AdminCard title="Contenido">
            <AdminTextarea
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              rows={18}
              placeholder="Escribe el contenido del artículo. Separa párrafos con una línea en blanco."
              className="font-mono text-[13px] leading-relaxed"
              required
            />
            <div className="flex items-center justify-between mt-2 text-[11px] text-text-3">
              <span>Separa párrafos con una línea en blanco</span>
              <span>{wordCount} palabras</span>
            </div>
          </AdminCard>

          <AdminCard>
            <button
              type="button"
              onClick={() => setShowSeo(!showSeo)}
              className="w-full flex items-center justify-between text-[13px] font-bold text-navy"
            >
              <span className="flex items-center gap-2">
                <Icon name="magnifying-glass" className="w-4 h-4" />
                Configuración SEO
              </span>
              <span className="text-text-3 text-[11px]">{showSeo ? "Ocultar" : "Mostrar"}</span>
            </button>

            {showSeo && (
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-4">
                <AdminField label="SEO Title">
                  <AdminInput
                    value={form.seoTitle}
                    onChange={(e) => update("seoTitle", e.target.value)}
                  />
                </AdminField>
                <AdminField label="SEO Description">
                  <AdminTextarea
                    value={form.seoDescription}
                    onChange={(e) => update("seoDescription", e.target.value)}
                    rows={2}
                  />
                </AdminField>

                <div className="bg-bg rounded-lg p-3 border border-border">
                  <p className="text-[10px] font-bold text-text-3 uppercase tracking-wider mb-2">
                    Vista previa en Google
                  </p>
                  <p className="text-[15px] text-blue font-medium leading-snug truncate">
                    {form.seoTitle || form.title || "Título del artículo"}
                  </p>
                  <p className="text-[12px] text-green mt-0.5 truncate">
                    coderssolution.com/blog/{form.slug || "slug"}
                  </p>
                  <p className="text-[12px] text-text-3 mt-1 line-clamp-2">
                    {form.seoDescription || form.excerpt || "Descripción del artículo..."}
                  </p>
                </div>
              </div>
            )}
          </AdminCard>
        </div>

        {/* Sidebar — publicación */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-6">
          <AdminCard title="Publicar">
            <div className="flex flex-col gap-3">
              <AdminField label="Estado">
                <AdminSelect
                  value={form.status}
                  onChange={(e) => update("status", e.target.value)}
                >
                  <option value="draft">Borrador</option>
                  <option value="published">Publicado</option>
                </AdminSelect>
              </AdminField>

              <AdminField label="Fecha de publicación">
                <AdminInput
                  type="date"
                  value={form.publishedAt}
                  onChange={(e) => update("publishedAt", e.target.value)}
                />
              </AdminField>

              <div
                className={`rounded-lg py-2.5 px-3 text-[12px] font-medium ${
                  form.status === "published"
                    ? "bg-green/10 text-green border border-green/20"
                    : "bg-orange/10 text-orange border border-orange/20"
                }`}
              >
                {form.status === "published"
                  ? "Visible en el blog público"
                  : "Solo visible en el panel CMS"}
              </div>
            </div>

            {error && (
              <p className="text-[12px] text-red-500 mt-3 bg-red-50 rounded-lg py-2 px-3">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <button type="submit" className="btn btn-blue w-full justify-center" disabled={saving}>
                {saving
                  ? "Guardando..."
                  : isEdit
                    ? "Actualizar artículo"
                    : "Publicar artículo"}
              </button>
              <Link href="/admin/blog" className="btn btn-outline w-full justify-center">
                Cancelar
              </Link>
            </div>
          </AdminCard>

          <AdminCard title="Organización">
            <AdminField label="Categoría">
              <AdminSelect
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
              >
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.label}
                  </option>
                ))}
              </AdminSelect>
            </AdminField>

            <div className="mt-3">
              <AdminField label="Autor">
                <AdminInput
                  value={form.author}
                  onChange={(e) => update("author", e.target.value)}
                />
              </AdminField>
            </div>
          </AdminCard>

          {isEdit && post.status === "published" && (
            <AdminCard>
              <Link
                href={`/blog/${form.slug}`}
                target="_blank"
                className="flex items-center justify-between text-[13px] font-semibold text-blue hover:underline"
              >
                Ver artículo en el blog
                <Icon name="link" className="w-4 h-4" />
              </Link>
            </AdminCard>
          )}
        </div>
      </div>
    </form>
  );
}
