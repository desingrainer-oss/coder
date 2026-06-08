"use client";

import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminShell({ title, subtitle, breadcrumbs, actions, children }) {
  return (
    <div className="min-h-screen bg-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} actions={actions} />

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-[1200px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
