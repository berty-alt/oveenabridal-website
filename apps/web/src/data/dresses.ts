export const categories = ["All", "Bridal", "Engagement", "Bridesmaid", "Wedding Party", "Pre-shoot"] as const;
export type Category = (typeof categories)[number];
export type DressCategory = Exclude<Category, "All">;

export type Dress = {
  code: string;
  slug: string;
  name: string;
  category: DressCategory;
  style: string;
  sizes: string;
  price: number;
  deposit: number;
  image: string;
};

export const dresses: Dress[] = [
  { code: "OV-BR-001", slug: "ov-br-001", name: "Ivory Liyana", category: "Bridal", style: "Lace A-line gown", sizes: "S–XL", price: 15000, deposit: 10000, image: "/images/collection/ivory-liyana.webp" },
  { code: "OV-BR-002", slug: "ov-br-002", name: "Pearl Amari", category: "Bridal", style: "Soft ball-gown silhouette", sizes: "M–XXL", price: 18000, deposit: 10000, image: "/images/home/featured-ivory-gown.jpg" },
  { code: "OV-EN-001", slug: "ov-en-001", name: "Rosé Asha", category: "Engagement", style: "Embellished off-shoulder gown", sizes: "S–L", price: 10000, deposit: 7500, image: "/images/collection/rose-asha.webp" },
  { code: "OV-EN-002", slug: "ov-en-002", name: "Plum Devina", category: "Engagement", style: "Layered statement gown", sizes: "M–XL", price: 12000, deposit: 7500, image: "/images/home/featured-burgundy-gown.jpg" },
  { code: "OV-BM-001", slug: "ov-bm-001", name: "Sage Amaya", category: "Bridesmaid", style: "Chiffon V-neck A-line", sizes: "XS–XXL", price: 5000, deposit: 5000, image: "/images/collection/sage-amaya.webp" },
  { code: "OV-WP-001", slug: "ov-wp-001", name: "Ruby Raveena", category: "Wedding Party", style: "Layered organza ball gown", sizes: "S–XL", price: 8000, deposit: 5000, image: "/images/collection/ruby-raveena.webp" },
  { code: "OV-PS-001", slug: "ov-ps-001", name: "Blue Serene", category: "Pre-shoot", style: "Flowing chiffon gown", sizes: "S–XL", price: 7000, deposit: 5000, image: "/images/collection/blue-serene.webp" },
  { code: "OV-PS-002", slug: "ov-ps-002", name: "Sunset Elara", category: "Pre-shoot", style: "Romantic full-skirt look", sizes: "M–XL", price: 7500, deposit: 5000, image: "/images/home/real-bride-sunset.jpg" },
  { code: "OV-BR-003", slug: "ov-br-003", name: "Ivory Nethra", category: "Bridal", style: "Long-sleeve lace mermaid", sizes: "S–L", price: 20000, deposit: 10000, image: "/images/collection/ivory-nethra.webp" },
  { code: "OV-BR-004", slug: "ov-br-004", name: "Satin Aviana", category: "Bridal", style: "Minimal square-neck A-line", sizes: "S–XL", price: 16000, deposit: 10000, image: "/images/collection/satin-aviana.webp" },
  { code: "OV-EN-003", slug: "ov-en-003", name: "Emerald Ishara", category: "Engagement", style: "Crystal-draped one-shoulder gown", sizes: "S–L", price: 11000, deposit: 7500, image: "/images/collection/emerald-ishara.webp" },
  { code: "OV-EN-004", slug: "ov-en-004", name: "Midnight Senuri", category: "Engagement", style: "Sequin cap-sleeve gown", sizes: "M–XXL", price: 12500, deposit: 7500, image: "/images/collection/midnight-senuri.webp" },
  { code: "OV-BM-002", slug: "ov-bm-002", name: "Dusty Rose Mihara", category: "Bridesmaid", style: "Flutter-sleeve wrap gown", sizes: "XS–XXL", price: 5500, deposit: 5000, image: "/images/collection/dusty-rose-mihara.webp" },
  { code: "OV-BM-003", slug: "ov-bm-003", name: "Lavender Nimaya", category: "Bridesmaid", style: "Pleated one-shoulder chiffon", sizes: "XS–XL", price: 5500, deposit: 5000, image: "/images/collection/lavender-nimaya.webp" },
  { code: "OV-WP-002", slug: "ov-wp-002", name: "Gold Tashya", category: "Wedding Party", style: "Beaded bateau-neck gown", sizes: "M–XXL", price: 9500, deposit: 7500, image: "/images/collection/gold-tashya.webp" },
  { code: "OV-WP-003", slug: "ov-wp-003", name: "Teal Vihangi", category: "Wedding Party", style: "Layered off-shoulder organza", sizes: "S–XL", price: 9000, deposit: 7500, image: "/images/collection/teal-vihangi.webp" },
  { code: "OV-PS-003", slug: "ov-ps-003", name: "Scarlet Araliya", category: "Pre-shoot", style: "Flowing cape-sleeve chiffon", sizes: "S–XL", price: 8500, deposit: 5000, image: "/images/collection/scarlet-araliya.webp" },
  { code: "OV-PS-004", slug: "ov-ps-004", name: "Amber Savana", category: "Pre-shoot", style: "Tiered sunset statement gown", sizes: "M–XL", price: 8000, deposit: 5000, image: "/images/collection/amber-savana.webp" },
];

export const money = (value: number) => `LKR ${value.toLocaleString("en-LK")}`;

export function getDress(slug: string) {
  return dresses.find((dress) => dress.slug === slug);
}
