import type { Metadata } from "next";
import Link from "next/link";
import { createSupabaseServerClient, isAdminEmail, isSupabaseConfigured } from "@/lib/supabase/server";
import { AdminDashboard } from "./admin-dashboard";
import { AdminLogin } from "./admin-login";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin" };

export default async function AdminPage() {
  if (!isSupabaseConfigured()) {
    return (
      <main className="admin-gate">
        <section className="admin-gate-card">
          <p className="eyebrow">Oveena administration</p>
          <h1>Database setup required</h1>
          <p>The secure admin dashboard is ready. Connect the Supabase project and run the included migration to enable login, product editing and rental approvals.</p>
          <code>NEXT_PUBLIC_SUPABASE_URL · NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY · SUPABASE_SERVICE_ROLE_KEY · ADMIN_EMAILS</code>
          <Link className="button button-dark" href="/">Return to website</Link>
        </section>
      </main>
    );
  }

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !isAdminEmail(user.email)) return <AdminLogin />;
  return <AdminDashboard email={user.email ?? "Admin"} />;
}
