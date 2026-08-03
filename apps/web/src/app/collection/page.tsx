import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CollectionClient } from "./collection-client";

export const metadata: Metadata = {
  title: "Dress Collection",
  description:
    "Explore Oveena bridal, engagement, bridesmaid, wedding-party and pre-shoot outfits available through in-store fitting and approval.",
};

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="collection-hero">
          <div className="site-shell collection-hero-inner">
            <p className="eyebrow eyebrow-light">The Oveena edit</p>
            <h1>Find a look for every celebration.</h1>
            <p>
              Bridal gowns, engagement looks, bridesmaid dresses, wedding-party
              outfits and flowing pre-shoot styles—selected for an in-store fitting in Hanwella.
            </p>
            <div className="collection-hero-notes">
              <span>Rentals from LKR 5,000</span>
              <span>Deposits from LKR 5,000</span>
              <span>Shop collection only</span>
            </div>
          </div>
        </section>

        <CollectionClient />

        <section className="collection-policy">
          <div className="site-shell collection-policy-grid">
            <div>
              <p className="eyebrow">Before you reserve</p>
              <h2>A fitting first. Approval before every rental.</h2>
            </div>
            <div className="policy-points">
              <p><strong>01</strong><span>Visit the Hanwella showroom to check fit, condition and availability.</span></p>
              <p><strong>02</strong><span>Every rental request is confirmed only after Oveena admin approval.</span></p>
              <p><strong>03</strong><span>Pay by cash or bank transfer. Pickup and return are at the shop; delivery is not available.</span></p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <a className="whatsapp-float" href="https://wa.me/94774968058" aria-label="Chat with Oveena on WhatsApp">
        <span aria-hidden="true">●</span> WhatsApp
      </a>
    </>
  );
}
