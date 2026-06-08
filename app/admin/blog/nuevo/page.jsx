import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminBlogForm from "@/components/AdminBlogForm";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Nuevo artículo | CMS Coders Solution",
  robots: { index: false, follow: false },
};

export default async function AdminNewPostPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  return (
    <AdminShell
      title="Nuevo artículo"
      subtitle="Crea un nuevo artículo para el blog"
      breadcrumbs={[
        { label: "CMS", href: "/admin/blog" },
        { label: "Artículos", href: "/admin/blog" },
        { label: "Nuevo" },
      ]}
    >
      <AdminBlogForm />
    </AdminShell>
  );
}
