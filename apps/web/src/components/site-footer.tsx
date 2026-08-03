import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-monogram brand-monogram-light" aria-hidden="true">O</span>
          <div>
            <p className="footer-title">Oveena Bridal Dresses</p>
            <p>Elegance that makes memories.</p>
          </div>
        </div>

        <div>
          <h2>Visit the showroom</h2>
          <address>
            63/2/1 Main Street<br />
            Hanwella 10650, Sri Lanka
          </address>
          <p>Open daily · 9:30 AM–5:30 PM</p>
        </div>

        <div>
          <h2>Contact</h2>
          <a href="tel:+94774968058">+94 77 496 8058</a>
          <a href="mailto:oveenabridal@gmail.com">oveenabridal@gmail.com</a>
          <a href="https://wa.me/94774968058">WhatsApp Oveena</a>
        </div>

        <div>
          <h2>Explore</h2>
          <Link href="/collection">Bridal collection</Link>
          <Link href="/#how-it-works">How renting works</Link>
          <Link href="/#book-fitting">Book a fitting</Link>
          <Link href="/#faq">Frequently asked questions</Link>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <p>© 2026 Oveena Bridal Dresses. All rights reserved.</p>
        <p>Rental confirmation is subject to showroom approval.</p>
      </div>
    </footer>
  );
}

