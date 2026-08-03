import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { dresses } from "@/data/dresses";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export async function GET() {
  if (!isSupabaseConfigured()) return NextResponse.json(dresses);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    { auth: { persistSession: false } },
  );
  const { data, error } = await supabase
    .from("products")
    .select("code,slug,name,category,style,sizes,price,deposit,image")
    .eq("active", true)
    .order("created_at", { ascending: true });
  if (error || !data?.length) return NextResponse.json(dresses);
  return NextResponse.json(data);
}
