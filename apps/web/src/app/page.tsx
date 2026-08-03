import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const featuredDresses = [
  { number: "01", type: "Western Bridal", name: "Ivory Romance", image: "/images/home/featured-ivory-gown.jpg", alt: "Bride wearing an ivory beaded ball gown outdoors" },
  { number: "02", type: "Evening & Homecoming", name: "Burgundy Statement", image: "/images/home/featured-burgundy-gown.jpg", alt: "Bride wearing a burgundy ruffled ball gown" },
  { number: "03", type: "Western Bridal", name: "Lakeside Elegance", image: "/images/home/real-bride-lakeside.jpg", alt: "Bride in an ivory gown with groom beside a lake" },
];

const bridalStyles = [
  "Kandyan Bridal",
  "Western Bridal",
  "Indian Bridal",
  "Muslim Bridal",
  "Homecoming",
  "Engagement Outfits",
];

const styleCards = bridalStyles.map((style, index) => ({
  style,
  image: [
    "/images/home/real-bride-lakeside.jpg",
    "/images/home/featured-ivory-gown.jpg",
    "/images/home/real-bride-sunset.jpg",
    "/images/home/real-bride-closeup.jpg",
    "/images/home/featured-burgundy-gown.jpg",
    "/images/home/real-bride-lakeside.jpg",
  ][index],
}));

const processSteps = [
  ["01", "Discover", "Browse the collection and shortlist the styles that feel like you."],
  ["02", "Book a fitting", "Reserve private showroom time for personal guidance and measurements."],
  ["03", "Request your dress", "Select your event dates and send a rental request for review."],
  ["04", "Collect in store", "Once approved and prepared, collect your dress from our Hanwella showroom."],
];

const faqs = [
  ["Can I book a dress instantly?", "Every rental request is reviewed by Oveena before confirmation, so availability and fitting details can be checked carefully."],
  ["Do you deliver dresses?", "Oveena currently provides showroom pickup and return only. Delivery is not available."],
  ["How can I pay?", "The initial payment options are cash and bank transfer. Payment instructions are shared after your request is reviewed."],
  ["Is a physical fitting required?", "A showroom fitting is strongly recommended so the team can review measurements, comfort and any available alteration options."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Bridal elegance · Hanwella, Sri Lanka</p>
              <h1>Find the dress that feels like <em>your story.</em></h1>
              <p className="hero-lead">
                Discover thoughtfully selected bridal dresses, engagement outfits and
                bridesmaids’ looks with personal guidance at every fitting.
              </p>
              <div className="button-row">
                <a className="button button-dark" href="#collection">Explore dresses</a>
                <a className="button button-quiet" href="#book-fitting">Book a private fitting</a>
              </div>
              <ul className="hero-notes" aria-label="Oveena service highlights">
                <li>Private fittings</li>
                <li>Admin-reviewed rentals</li>
                <li>Open seven days</li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-halo" aria-hidden="true" />
              <div className="hero-image-wrap">
                <Image
                  src="/images/home/featured-ivory-gown.jpg"
                  alt="Bride wearing an ivory beaded Oveena ball gown"
                  width={1365}
                  height={2048}
                  className="hero-image"
                  priority
                  sizes="(max-width: 900px) 86vw, 44vw"
                />
              </div>
              <div className="hero-card">
                <span>Showroom</span>
                <strong>Hanwella</strong>
                <small>Open daily · 9:30–5:30</small>
              </div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">Scroll to discover ↓</div>
        </section>

        <section className="finder-section" aria-labelledby="finder-title">
          <div className="site-shell finder-card">
            <div>
              <p className="eyebrow">Your bridal search</p>
              <h2 id="finder-title">Find your dream dress</h2>
            </div>
            <form className="finder-form" action="#collection">
              <label>
                Bridal style
                <select name="style" defaultValue="">
                  <option value="" disabled>Choose a style</option>
                  {bridalStyles.map((style) => <option key={style}>{style}</option>)}
                </select>
              </label>
              <label>
                Event date
                <input type="date" name="event-date" />
              </label>
              <button className="button button-gold" type="submit">Start exploring</button>
            </form>
          </div>
        </section>

        <section className="section section-light" id="collection">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">The Oveena edit</p>
                <h2>Featured collections</h2>
              </div>
              <p>Real Oveena bridal moments, presented as a first look while individual dress codes, sizes and prices are prepared.</p>
            </div>
            <div className="dress-grid">
              {featuredDresses.map((dress) => (
                <article className="dress-card" key={dress.number}>
                  <div className="dress-image">
                    <Image
                      src={dress.image}
                      alt={dress.alt}
                      fill
                      className="photo-cover"
                      sizes="(max-width: 820px) 100vw, 33vw"
                    />
                    <span>{dress.number}</span>
                  </div>
                  <div className="dress-card-copy">
                    <p>{dress.type}</p>
                    <h3>{dress.name}</h3>
                    <a href="#book-fitting">Enquire in showroom <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section styles-section" id="styles">
          <div className="site-shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Made for every celebration</p>
              <h2>Browse by bridal style</h2>
              <p>From timeless heritage silhouettes to contemporary celebrations.</p>
            </div>
            <div className="style-grid">
              {styleCards.map(({ style, image }, index) => (
                <a className="style-card" href="#book-fitting" key={style}>
                  <Image src={image} alt="" fill className="photo-cover" sizes="(max-width: 540px) 100vw, 33vw" />
                  <span className="style-shade" aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <strong>{style}</strong>
                  <small>Explore the style →</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tryon-section">
          <div className="site-shell tryon-grid">
            <div className="tryon-art" aria-hidden="true">
              <div className="tryon-frame tryon-frame-back" />
              <div className="tryon-frame tryon-frame-front">
                <span>AI</span>
                <p>Virtual preview</p>
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-light">Coming in a future release</p>
              <h2>See the possibility before your fitting.</h2>
              <p>
                Oveena’s planned Virtual Try-On experience will offer a private,
                temporary AI preview while keeping the physical fitting at the heart
                of every rental decision.
              </p>
              <div className="disclaimer">
                AI-generated preview only. Actual colour, fit, fabric drape, size and
                appearance may differ. Please book a physical fitting before confirming your rental.
              </div>
              <a className="text-link text-link-light" href="#book-fitting">Join the fitting journey →</a>
            </div>
          </div>
        </section>

        <section className="section process-section" id="how-it-works">
          <div className="site-shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Simple, personal, considered</p>
              <h2>How renting works</h2>
            </div>
            <div className="process-grid">
              {processSteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section packages-section">
          <div className="site-shell packages-grid">
            <div className="package-intro">
              <p className="eyebrow">Personal service</p>
              <h2>Support for every bridal moment.</h2>
              <p>Final rental periods, deposits and package pricing will be published only after owner approval.</p>
              <a className="text-link" href="https://wa.me/94774968058">Ask about your event →</a>
            </div>
            <article className="package-card">
              <span>01</span>
              <h3>Private bridal fitting</h3>
              <p>One-to-one showroom time to explore silhouettes, details and comfort.</p>
            </article>
            <article className="package-card package-card-featured">
              <span>02</span>
              <h3>Bridal rental journey</h3>
              <p>From fitting request to approved collection and showroom return.</p>
            </article>
            <article className="package-card">
              <span>03</span>
              <h3>Bridal party styling</h3>
              <p>Coordinated guidance for bridesmaids and celebration outfits.</p>
            </article>
          </div>
        </section>

        <section className="section story-section" id="about">
          <div className="site-shell story-grid">
            <div className="story-mosaic" aria-label="Oveena real bride gallery">
              <div>
                <Image src="/images/home/real-bride-sunset.jpg" alt="Bride and groom at sunset" fill className="photo-cover" sizes="(max-width: 820px) 60vw, 30vw" />
                <span>Golden-hour memories</span><small>Real bridal moment</small>
              </div>
              <div>
                <Image src="/images/home/real-bride-closeup.jpg" alt="Bride and groom sharing a quiet moment" fill className="photo-cover" sizes="(max-width: 820px) 40vw, 18vw" />
                <span>Made personal</span><small>Real bridal moment</small>
              </div>
              <div>
                <Image src="/images/home/real-bride-lakeside.jpg" alt="Bride and groom beside a lake" fill className="photo-cover" sizes="(max-width: 820px) 40vw, 18vw" />
                <span>Celebrated together</span><small>Real bridal moment</small>
              </div>
            </div>
            <div className="story-copy">
              <p className="eyebrow">Real moments, beautifully remembered</p>
              <h2>Your day deserves to feel entirely your own.</h2>
              <p>
                Oveena brings bridal styling closer to home with a calm showroom
                experience, thoughtful guidance and a collection shaped around Sri Lankan celebrations.
              </p>
              <div className="service-promises">
                <p><strong>Personal</strong><span>Guidance centred on your celebration.</span></p>
                <p><strong>Transparent</strong><span>Approval, payment and collection steps explained clearly.</span></p>
                <p><strong>Considered</strong><span>A physical fitting before every confirmed rental.</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="showroom-section">
          <div className="showroom-image">
            <Image
              src="/images/home/showroom-concept.jpg"
              alt="AI-generated interior concept for an Oveena bridal showroom"
              fill
              className="photo-cover"
              sizes="100vw"
            />
            <span className="showroom-overlay" aria-hidden="true" />
          </div>
          <div className="site-shell showroom-copy">
            <p className="eyebrow eyebrow-light">Oveena showroom concept</p>
            <h2>A calm space for a once-in-a-lifetime choice.</h2>
            <p>AI-generated design concept shown for atmosphere only—not a photograph of the current Hanwella showroom.</p>
            <a className="button button-gold" href="#contact">Plan your visit</a>
          </div>
        </section>

        <section className="fitting-cta" id="book-fitting">
          <div className="site-shell fitting-cta-inner">
            <p className="eyebrow eyebrow-light">Your fitting begins here</p>
            <h2>Let’s find the one together.</h2>
            <p>Visit Oveena in Hanwella for a private bridal fitting and personal collection guidance.</p>
            <div className="button-row button-row-centered">
              <a className="button button-gold" href="https://wa.me/94774968058">Book through WhatsApp</a>
              <a className="button button-outline-light" href="tel:+94774968058">Call the showroom</a>
            </div>
          </div>
        </section>

        <section className="section social-section">
          <div className="site-shell social-grid">
            <div>
              <p className="eyebrow">Follow the Oveena story</p>
              <h2>New arrivals, fitting moments and bridal inspiration.</h2>
            </div>
            <div className="social-tiles" aria-label="Oveena social gallery preview">
              <span><Image src="/images/home/real-bride-closeup.jpg" alt="Oveena bridal couple" fill className="photo-cover" sizes="20vw" /><strong>Instagram</strong></span>
              <span><Image src="/images/home/featured-burgundy-gown.jpg" alt="Burgundy bridal gown" fill className="photo-cover" sizes="20vw" /><strong>Facebook</strong></span>
              <span><Image src="/images/home/real-bride-sunset.jpg" alt="Bridal couple at sunset" fill className="photo-cover" sizes="20vw" /><strong>TikTok</strong></span>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="site-shell faq-grid">
            <div>
              <p className="eyebrow">Before your visit</p>
              <h2>Frequently asked questions</h2>
              <p>Need anything else? Call or WhatsApp the showroom for personal help.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="guide-section">
          <div className="site-shell guide-inner">
            <div>
              <p className="eyebrow">Plan with confidence</p>
              <h2>Request the Oveena bridal guide.</h2>
              <p>Ask for current collection details and fitting preparation guidance directly from the showroom.</p>
            </div>
            <a className="button button-dark" href="mailto:oveenabridal@gmail.com?subject=Oveena%20Bridal%20Guide%20Request">Request by email</a>
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

