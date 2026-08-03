import { NextResponse } from "next/server";
import { createSupabaseAdminClient, requireAdmin } from "@/lib/supabase/server";

const fields = ["code", "slug", "name", "category", "style", "sizes", "price", "deposit", "image", "active"] as const;

function productPayload(body: Record<string, unknown>) {
  return Object.fromEntries(fields.filter((key) => key in body).map((key) => [key, body[key]]));
}

export async function GET() {
  if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await createSupabaseAdminClient().from("products").select("*").order("created_at");
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json(data);
}

export async function POST(request: Request) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const payload = productPayload(body);
  const { data, error } = await createSupabaseAdminClient().from("products").insert(payload).select().single();
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json(data, { status: 201 });
}
