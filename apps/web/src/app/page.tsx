import Image from "next/image";

const businessDetails = [
  { label: "Visit", value: "63/2/1 Main Street, Hanwella 10650" },
  { label: "Call or WhatsApp", value: "+94 77 496 8058" },
  { label: "Open daily", value: "9:30 AM - 5:30 PM" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[var(--gold)]/40 bg-black shadow-2xl shadow-black/20">
          <Image
            src="/brand/oveena-brand.jpg"
            alt="Oveena Bridal Dresses brand artwork"
            width={1280}
            height={1280}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--taupe)]">
            Oveena Bridal Dresses · Hanwella
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Elegance that makes memories.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--taupe)]">
            Our new bridal rental experience is being prepared with curated
            collections, fitting appointments, and carefully reviewed rental
            requests.
          </p>

          <dl className="mt-10 grid gap-6 border-y border-[var(--gold)]/30 py-8 sm:grid-cols-3">
            {businessDetails.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-6">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+94774968058"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--charcoal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-dark)]"
            >
              Call Oveena
            </a>
            <a
              href="https://wa.me/94774968058"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--charcoal)] px-6 py-3 text-sm font-semibold transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-dark)]"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

