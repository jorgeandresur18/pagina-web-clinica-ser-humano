import { createClient } from "@supabase/supabase-js";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getPendingComments() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  const { count } = await supabase
    .from("comments")
    .select("*", { count: "exact", head: true })
    .eq("aprobado", false);
  return count ?? 0;
}

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pendingComments = await getPendingComments();

  return (
    <div className="flex min-h-screen bg-[#f4f4f2]">
      <AdminSidebar pendingComments={pendingComments} />
      <div className="ml-60 flex flex-1 flex-col">{children}</div>
    </div>
  );
}