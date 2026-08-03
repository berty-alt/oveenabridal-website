import { NextResponse } from "next/server";
import { createSupabaseAdminClient, requireAdmin } from "@/lib/supabase/server";

type Props = { params: Promise<{ id: string }> };
const fields = ["code", "slug", "name", "category", "style", "sizes", "price", "deposit", "image", "active"] as const;

export async function PUT(request: Request, { params }: Props) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const payload = Object.fromEntries(fields.filter((key) => key in body).map((key) => [key, body[key]]));
  const { data, error } = await createSupabaseAdminClient().from("products").update({ ...payload, updated_at: new Date().toISOString() }).eq("id", (await params).id).select().single();
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json(data);
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { error } = await createSupabaseAdminClient().from("products").update({ active: false, updated_at: new Date().toISOString() }).eq("id", (await params).id);
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json({ ok: true });
}
