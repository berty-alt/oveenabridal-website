import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json({ stored: false, mode: "whatsapp-only" });
  const body = await request.json();
  const allowed = ["dress_code", "dress_name", "customer_name", "phone", "preferred_size", "event_date", "fitting_date", "notes"];
  const payload = Object.fromEntries(allowed.filter((key) => key in body).map((key) => [key, body[key]]));
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, { auth: { persistSession: false } });
  const { error } = await supabase.from("rental_requests").insert(payload);
  return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json({ stored: true }, { status: 201 });
}
