import { redirect } from "next/navigation";
import AdminLogin from "@/components/AdminLogin";
import { isAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Admin | Coders Solution",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (await isAuthenticated()) {
    redirect("/admin/blog");
  }
  return <AdminLogin />;
}
