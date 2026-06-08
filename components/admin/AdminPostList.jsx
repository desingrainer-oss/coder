"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const categoryColors = {
  salesforce: "bg-blue/10 text-blue border-blue/20",
  implementacion: "bg-purple/10 text-purple border-purple/20",
  ia: "bg-teal/10 text-teal border-teal/20",
  industria: "bg-orange/10 text-orange border-orange/20",
  casos: "bg-green/10 text-green border-green/20",
};

export default function AdminPostList({ posts }) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = useMemo(() => ({
    total: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    drafts: posts.filter((p) => p.status === "draft").length,
  }), [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.categoryLabel.toLowerCase().includes(query.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || post.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [posts, query, statusFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 shadow-card">
          <p className="text-[11px] text-text-3 font-medium">Total artículos</p>
          <p className="text-[28px] font-extrabold text-navy">{stats.total}</p>
        </div>
        <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 shadow-card">
          <p className="text-[11px] text-text-3 font-medium">Publicados</p>
          <p className="text-[28px] font-extrabold text-green">{stats.published}</p>
        </div>
        <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 shadow-card">
          <p className="text-[11px] text-text-3 font-medium">Borradores</p>
          <p className="text-[28px] font-extrabold text-orange">{stats.drafts}</p>
        </div>
      </div>

      <div className="bg-white border-[1.5px] border-border rounded-[10px] shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="magnifying-glass" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-3" />
            <input
              type="search"
              placeholder="Buscar artículos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="admin-input w-full pl-9"
            />
          </div>
          <div className="flex gap-1.5 bg-bg rounded-lg p-1">
            {[
              { id: "all", label: "Todos" },
              { id: "published", label: "Publicados" },
              { id: "draft", label: "Borradores" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setStatusFilter(f.id)}
                className={`text-[12px] font-semibold px-3 py-1.5 rounded-md transition-all ${
                  statusFilter === f.id
                    ? "bg-white text-navy shadow-sm"
                    : "text-text-3 hover:text-navy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mb-3 flex justify-center">
              <Icon name="inbox" className="w-10 h-10 text-text-3" />
            </div>
            <p className="text-[14px] font-semibold text-navy mb-1">Sin resultados</p>
            <p className="text-[13px] text-text-3">Prueba con otro término o crea un artículo nuevo.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="px-5 py-4 flex items-center gap-4 hover:bg-bg/60 transition-colors group"
              >
                <div
                  className={`w-10 h-10 rounded-[10px] border flex items-center justify-center text-sm font-bold shrink-0 ${
                    categoryColors[post.category] || "bg-bg text-text-3 border-border"
                  }`}
                >
                  {post.categoryLabel.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-bold text-navy truncate group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-text-3 truncate mt-0.5">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span
                      className={`text-[10px] font-semibold rounded-full py-0.5 px-2 ${
                        post.status === "published"
                          ? "bg-green/10 text-green"
                          : "bg-orange/10 text-orange"
                      }`}
                    >
                      {post.status === "published" ? "Publicado" : "Borrador"}
                    </span>
                    <span className="text-[11px] text-text-3">{post.categoryLabel}</span>
                    <span className="text-[11px] text-gray-300">·</span>
                    <span className="text-[11px] text-text-3">{post.publishedAt}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  {post.status === "published" && (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-[12px] font-semibold text-text-3 hover:text-blue px-2.5 py-1.5 rounded-md hover:bg-bg transition-all"
                    >
                      Ver
                    </Link>
                  )}
                  <Link
                    href={`/admin/blog/${post.id}/editar`}
                    className="btn btn-blue text-[12px] py-1.5 px-3"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
