import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getAllPosts } from "@/lib/blog";
import AdminShell from "@/components/admin/AdminShell";
import AdminPostList from "@/components/admin/AdminPostList";

export const metadata = {
  title: "Blog CMS | Coders Solution",
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const posts = getAllPosts({ includeDrafts: true });

  return (
    <AdminShell
      title="Artículos del blog"
      subtitle="Gestiona, edita y publica contenido para el blog de Coders Solution"
      breadcrumbs={[{ label: "CMS", href: "/admin/blog" }, { label: "Artículos" }]}
      actions={
        <Link href="/admin/blog/nuevo" className="btn btn-blue">
          + Nuevo artículo
        </Link>
      }
    >
      <AdminPostList posts={posts} />
    </AdminShell>
  );
}
