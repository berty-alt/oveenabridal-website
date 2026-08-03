import { createClient } from "@supabase/supabase-js";
import { dresses, type Dress } from "@/data/dresses";
import { isSupabaseConfigured } from "@/lib/supabase/server";

type ProductRow = {
  code: string;
  slug: string;
  name: string;
  category: Dress["category"];
  style: string;
  sizes: string;
  price: number;
  deposit: number;
  image: string;
};

function publicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export async function getPublicDress(slug: string): Promise<Dress | undefined> {
  if (!isSupabaseConfigured()) return dresses.find((dress) => dress.slug === slug);
  const { data } = await publicClient()
    .from("products")
    .select("code,slug,name,category,style,sizes,price,deposit,image")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle<ProductRow>();
  return data ?? dresses.find((dress) => dress.slug === slug);
}
