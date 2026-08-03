"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Bridal", "Engagement", "Bridesmaid", "Wedding Party", "Pre-shoot"] as const;
type Category = (typeof categories)[number];

const dresses = [
  {
    code: "OV-BR-001",
    name: "Ivory Liyana",
    category: "Bridal",
    style: "Lace A-line gown",
    sizes: "S–XL",
    price: 15000,
    deposit: 10000,
    image: "/images/collection/ivory-liyana.webp",
  },
  {
    code: "OV-BR-002",
    name: "Pearl Amari",
    category: "Bridal",
    style: "Soft ball-gown silhouette",
    sizes: "M–XXL",
    price: 18000,
    deposit: 10000,
    image: "/images/home/featured-ivory-gown.jpg",
  },
  {
    code: "OV-EN-001",
    name: "Rosé Asha",
    category: "Engagement",
    style: "Embellished off-shoulder gown",
    sizes: "S–L",
    price: 10000,
    deposit: 7500,
    image: "/images/collection/rose-asha.webp",
  },
  {
    code: "OV-EN-002",
    name: "Plum Devina",
    category: "Engagement",
    style: "Layered statement gown",
    sizes: "M–XL",
    price: 12000,
    deposit: 7500,
    image: "/images/home/featured-burgundy-gown.jpg",
  },
  {
    code: "OV-BM-001",
    name: "Sage Amaya",
    category: "Bridesmaid",
    style: "Chiffon V-neck A-line",
    sizes: "XS–XXL",
    price: 5000,
    deposit: 5000,
    image: "/images/collection/sage-amaya.webp",
  },
  {
    code: "OV-WP-001",
    name: "Ruby Raveena",
    category: "Wedding Party",
    style: "Layered organza ball gown",
    sizes: "S–XL",
    price: 8000,
    deposit: 5000,
    image: "/images/collection/ruby-raveena.webp",
  },
  {
    code: "OV-PS-001",
    name: "Blue Serene",
    category: "Pre-shoot",
    style: "Flowing chiffon gown",
    sizes: "S–XL",
    price: 7000,
    deposit: 5000,
    image: "/images/collection/blue-serene.webp",
  },
  {
    code: "OV-PS-002",
    name: "Sunset Elara",
    category: "Pre-shoot",
    style: "Romantic full-skirt look",
    sizes: "M–XL",
    price: 7500,
    deposit: 5000,
    image: "/images/home/real-bride-sunset.jpg",
  },
  {
    code: "OV-BR-003",
    name: "Ivory Nethra",
    category: "Bridal",
    style: "Long-sleeve lace mermaid",
    sizes: "S–L",
    price: 20000,
    deposit: 10000,
    image: "/images/collection/ivory-nethra.webp",
  },
  {
    code: "OV-BR-004",
    name: "Satin Aviana",
    category: "Bridal",
    style: "Minimal square-neck A-line",
    sizes: "S–XL",
    price: 16000,
    deposit: 10000,
    image: "/images/collection/satin-aviana.webp",
  },
  {
    code: "OV-EN-003",
    name: "Emerald Ishara",
    category: "Engagement",
    style: "Crystal-draped one-shoulder gown",
    sizes: "S–L",
    price: 11000,
    deposit: 7500,
    image: "/images/collection/emerald-ishara.webp",
  },
  {
    code: "OV-EN-004",
    name: "Midnight Senuri",
    category: "Engagement",
    style: "Sequin cap-sleeve gown",
    sizes: "M–XXL",
    price: 12500,
    deposit: 7500,
    image: "/images/collection/midnight-senuri.webp",
  },
  {
    code: "OV-BM-002",
    name: "Dusty Rose Mihara",
    category: "Bridesmaid",
    style: "Flutter-sleeve wrap gown",
    sizes: "XS–XXL",
    price: 5500,
    deposit: 5000,
    image: "/images/collection/dusty-rose-mihara.webp",
  },
  {
    code: "OV-BM-003",
    name: "Lavender Nimaya",
    category: "Bridesmaid",
    style: "Pleated one-shoulder chiffon",
    sizes: "XS–XL",
    price: 5500,
    deposit: 5000,
    image: "/images/collection/lavender-nimaya.webp",
  },
  {
    code: "OV-WP-002",
    name: "Gold Tashya",
    category: "Wedding Party",
    style: "Beaded bateau-neck gown",
    sizes: "M–XXL",
    price: 9500,
    deposit: 7500,
    image: "/images/collection/gold-tashya.webp",
  },
  {
    code: "OV-WP-003",
    name: "Teal Vihangi",
    category: "Wedding Party",
    style: "Layered off-shoulder organza",
    sizes: "S–XL",
    price: 9000,
    deposit: 7500,
    image: "/images/collection/teal-vihangi.webp",
  },
  {
    code: "OV-PS-003",
    name: "Scarlet Araliya",
    category: "Pre-shoot",
    style: "Flowing cape-sleeve chiffon",
    sizes: "S–XL",
    price: 8500,
    deposit: 5000,
    image: "/images/collection/scarlet-araliya.webp",
  },
  {
    code: "OV-PS-004",
    name: "Amber Savana",
    category: "Pre-shoot",
    style: "Tiered sunset statement gown",
    sizes: "M–XL",
    price: 8000,
    deposit: 5000,
    image: "/images/collection/amber-savana.webp",
  },
] as const;

const money = (value: number) => `LKR ${value.toLocaleString("en-LK")}`;

export function CollectionClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleDresses = activeCategory === "All"
    ? dresses
    : dresses.filter((dress) => dress.category === activeCategory);

  return (
    <section className="section collection-section" aria-labelledby="collection-title">
      <div className="site-shell">
        <div className="collection-toolbar">
          <div>
            <p className="eyebrow">Preview collection</p>
            <h2 id="collection-title">Choose your occasion</h2>
          </div>
          <div className="category-filters" aria-label="Filter dresses by occasion">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="catalogue-disclaimer">
          Preview names, codes, sizes and prices are guide information. Current stock, exact fit,
          rental period and final deposit are confirmed at the showroom.
        </p>

        <div className="catalogue-grid">
          {visibleDresses.map((dress) => {
            const message = encodeURIComponent(
              `Hello Oveena, I would like to arrange a fitting for ${dress.name} (${dress.code}).`,
            );
            return (
              <article className="catalogue-card" key={dress.code}>
                <div className="catalogue-image">
                  <Image
                    src={dress.image}
                    alt={`${dress.name} ${dress.style}`}
                    fill
                    className="photo-cover"
                    sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span>{dress.category}</span>
                </div>
                <div className="catalogue-copy">
                  <div className="catalogue-title-row">
                    <div>
                      <small>{dress.code}</small>
                      <h3>{dress.name}</h3>
                    </div>
                    <strong>From {money(dress.price)}</strong>
                  </div>
                  <p>{dress.style}</p>
                  <dl>
                    <div><dt>Sizes</dt><dd>{dress.sizes}</dd></div>
                    <div><dt>Deposit</dt><dd>From {money(dress.deposit)}</dd></div>
                  </dl>
                  <a
                    className="button button-dark"
                    href={`https://wa.me/94774968058?text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request a fitting
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
