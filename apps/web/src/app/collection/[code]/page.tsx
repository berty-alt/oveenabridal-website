import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dresses, getDress, money } from "@/data/dresses";
import { RentalRequestForm } from "./rental-request-form";

type PageProps = { params: Promise<{ code: string }> };

export function generateStaticParams() {
  return dresses.map((dress) => ({ code: dress.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dress = getDress((await params).code);
  if (!dress) return {};
  return {
    title: dress.name,
    description: `${dress.name} ${dress.style}. Request an in-store fitting at Oveena Bridal Dresses in Hanwella.`,
  };
}

export default async function DressDetailPage({ params }: PageProps) {
  const dress = getDress((await params).code);
  if (!dress) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="dress-detail-section">
          <div className="site-shell">
            <Link className="detail-back" href="/collection">← Back to collection</Link>
            <div className="dress-detail-grid">
              <div className="detail-image">
                <Image src={dress.image} alt={`${dress.name} ${dress.style}`} fill className="photo-cover" priority sizes="(max-width: 820px) 100vw, 52vw" />
                <span>{dress.category}</span>
              </div>
              <div className="detail-copy">
                <p className="eyebrow">{dress.code}</p>
                <h1>{dress.name}</h1>
                <p className="detail-style">{dress.style}</p>
                <div className="detail-price">
                  <p><span>Rental guide</span><strong>From {money(dress.price)}</strong></p>
                  <p><span>Refundable deposit</span><strong>From {money(dress.deposit)}</strong></p>
                </div>
                <dl className="detail-facts">
                  <div><dt>Preview sizes</dt><dd>{dress.sizes}</dd></div>
                  <div><dt>Payment</dt><dd>Cash or bank transfer</dd></div>
                  <div><dt>Collection</dt><dd>Hanwella showroom only</dd></div>
                  <div><dt>Confirmation</dt><dd>Subject to admin approval</dd></div>
                </dl>
                <div className="approval-note">
                  <strong>Request, not instant booking</strong>
                  <p>Fit, condition, dates, rental period and final charges are confirmed with the showroom before approval.</p>
                </div>
                <a className="button button-dark" href="#rental-request">Request this dress</a>
              </div>
            </div>
          </div>
        </section>

        <section className="rental-request-section" id="rental-request">
          <div className="site-shell rental-request-grid">
            <div>
              <p className="eyebrow eyebrow-light">Your fitting request</p>
              <h2>Tell us about your celebration.</h2>
              <p>Complete the form and continue to WhatsApp. Oveena will review your dates and arrange the next step.</p>
              <ul>
                <li>No online payment is collected.</li>
                <li>No delivery—pickup and return are at the shop.</li>
                <li>The request is confirmed only after admin approval.</li>
              </ul>
            </div>
            <RentalRequestForm dress={dress} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
