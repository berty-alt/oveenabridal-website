"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, dresses, type Category, money } from "@/data/dresses";

export function CollectionClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [products, setProducts] = useState(dresses);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => Array.isArray(data) && data.length && setProducts(data))
      .catch(() => undefined);
  }, []);

  const visibleDresses = activeCategory === "All"
    ? products
    : products.filter((dress) => dress.category === activeCategory);

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
          {visibleDresses.map((dress) => (
            <article className="catalogue-card" key={dress.code}>
              <Link className="catalogue-image" href={`/collection/${dress.slug}`} aria-label={`View ${dress.name} details`}>
                <Image
                  src={dress.image}
                  alt={`${dress.name} ${dress.style}`}
                  fill
                  className="photo-cover"
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span>{dress.category}</span>
              </Link>
              <div className="catalogue-copy">
                <div className="catalogue-title-row">
                  <div>
                    <small>{dress.code}</small>
                    <h3><Link href={`/collection/${dress.slug}`}>{dress.name}</Link></h3>
                  </div>
                  <strong>From {money(dress.price)}</strong>
                </div>
                <p>{dress.style}</p>
                <dl>
                  <div><dt>Sizes</dt><dd>{dress.sizes}</dd></div>
                  <div><dt>Deposit</dt><dd>From {money(dress.deposit)}</dd></div>
                </dl>
                <Link className="button button-dark" href={`/collection/${dress.slug}`}>
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
