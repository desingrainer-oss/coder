import { redirect, notFound } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getPostById } from "@/lib/blog";
import AdminBlogForm from "@/components/AdminBlogForm";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Editar artículo | CMS Coders Solution",
  robots: { index: false, follow: false },
};

export default async function AdminEditPostPage({ params }) {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  return (
    <AdminShell
      title="Editar artículo"
      subtitle={post.title}
      breadcrumbs={[
        { label: "CMS", href: "/admin/blog" },
        { label: "Artículos", href: "/admin/blog" },
        { label: "Editar" },
      ]}
    >
      <AdminBlogForm post={post} />
    </AdminShell>
  );
}
