import { NextResponse } from "next/server";
import { createSupabaseAdminClient, requireAdmin } from "@/lib/supabase/server";

export async function GET() {
  if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await createSupabaseAdminClient().from("rental_requests").select("*").order("created_at", { ascending: false });
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, status } = await request.json();
  if (!id || !["approved", "rejected", "pending"].includes(status)) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const { data, error } = await createSupabaseAdminClient().from("rental_requests").update({ status, reviewed_by: user.email, reviewed_at: new Date().toISOString() }).eq("id", id).select().single();
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json(data);
}
