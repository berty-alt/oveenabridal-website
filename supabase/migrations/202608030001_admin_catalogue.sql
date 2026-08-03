create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  slug text not null unique,
  name text not null,
  category text not null check (category in ('Bridal','Engagement','Bridesmaid','Wedding Party','Pre-shoot')),
  style text not null,
  sizes text not null,
  price integer not null check (price >= 5000),
  deposit integer not null check (deposit >= 5000),
  image text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.rental_requests (
  id uuid primary key default gen_random_uuid(),
  dress_code text not null,
  dress_name text not null,
  customer_name text not null,
  phone text not null,
  preferred_size text not null,
  event_date date not null,
  fitting_date date not null,
  notes text not null default '',
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  reviewed_by text,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.rental_requests enable row level security;

drop policy if exists "Public can view active products" on public.products;
create policy "Public can view active products" on public.products for select to anon, authenticated using (active = true);

drop policy if exists "Public can submit rental requests" on public.rental_requests;
create policy "Public can submit rental requests" on public.rental_requests for insert to anon, authenticated with check (status = 'pending');

insert into public.products (code, slug, name, category, style, sizes, price, deposit, image) values
('OV-BR-001','ov-br-001','Ivory Liyana','Bridal','Lace A-line gown','S–XL',15000,10000,'/images/collection/ivory-liyana.webp'),
('OV-BR-002','ov-br-002','Pearl Amari','Bridal','Soft ball-gown silhouette','M–XXL',18000,10000,'/images/home/featured-ivory-gown.jpg'),
('OV-EN-001','ov-en-001','Rosé Asha','Engagement','Embellished off-shoulder gown','S–L',10000,7500,'/images/collection/rose-asha.webp'),
('OV-EN-002','ov-en-002','Plum Devina','Engagement','Layered statement gown','M–XL',12000,7500,'/images/home/featured-burgundy-gown.jpg'),
('OV-BM-001','ov-bm-001','Sage Amaya','Bridesmaid','Chiffon V-neck A-line','XS–XXL',5000,5000,'/images/collection/sage-amaya.webp'),
('OV-WP-001','ov-wp-001','Ruby Raveena','Wedding Party','Layered organza ball gown','S–XL',8000,5000,'/images/collection/ruby-raveena.webp'),
('OV-PS-001','ov-ps-001','Blue Serene','Pre-shoot','Flowing chiffon gown','S–XL',7000,5000,'/images/collection/blue-serene.webp'),
('OV-PS-002','ov-ps-002','Sunset Elara','Pre-shoot','Romantic full-skirt look','M–XL',7500,5000,'/images/home/real-bride-sunset.jpg'),
('OV-BR-003','ov-br-003','Ivory Nethra','Bridal','Long-sleeve lace mermaid','S–L',20000,10000,'/images/collection/ivory-nethra.webp'),
('OV-BR-004','ov-br-004','Satin Aviana','Bridal','Minimal square-neck A-line','S–XL',16000,10000,'/images/collection/satin-aviana.webp'),
('OV-EN-003','ov-en-003','Emerald Ishara','Engagement','Crystal-draped one-shoulder gown','S–L',11000,7500,'/images/collection/emerald-ishara.webp'),
('OV-EN-004','ov-en-004','Midnight Senuri','Engagement','Sequin cap-sleeve gown','M–XXL',12500,7500,'/images/collection/midnight-senuri.webp'),
('OV-BM-002','ov-bm-002','Dusty Rose Mihara','Bridesmaid','Flutter-sleeve wrap gown','XS–XXL',5500,5000,'/images/collection/dusty-rose-mihara.webp'),
('OV-BM-003','ov-bm-003','Lavender Nimaya','Bridesmaid','Pleated one-shoulder chiffon','XS–XL',5500,5000,'/images/collection/lavender-nimaya.webp'),
('OV-WP-002','ov-wp-002','Gold Tashya','Wedding Party','Beaded bateau-neck gown','M–XXL',9500,7500,'/images/collection/gold-tashya.webp'),
('OV-WP-003','ov-wp-003','Teal Vihangi','Wedding Party','Layered off-shoulder organza','S–XL',9000,7500,'/images/collection/teal-vihangi.webp'),
('OV-PS-003','ov-ps-003','Scarlet Araliya','Pre-shoot','Flowing cape-sleeve chiffon','S–XL',8500,5000,'/images/collection/scarlet-araliya.webp'),
('OV-PS-004','ov-ps-004','Amber Savana','Pre-shoot','Tiered sunset statement gown','M–XL',8000,5000,'/images/collection/amber-savana.webp')
on conflict (code) do update set
  slug = excluded.slug, name = excluded.name, category = excluded.category,
  style = excluded.style, sizes = excluded.sizes, price = excluded.price,
  deposit = excluded.deposit, image = excluded.image, updated_at = now();
