import Link from "next/link";

const navigation = [
  { href: "/collection", label: "Collection" },
  { href: "/#styles", label: "Bridal Styles" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <div className="announcement-bar">
        <p>Private bridal fittings available daily in Hanwella</p>
        <a href="tel:+94774968058">Call +94 77 496 8058</a>
      </div>
      <header className="site-header">
        <div className="site-shell header-inner">
          <Link className="brand-lockup" href="/" aria-label="Oveena Bridal Dresses home">
            <span className="brand-monogram" aria-hidden="true">O</span>
            <span>
              <strong>Oveena</strong>
              <small>Bridal Dresses</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>

          <Link className="button button-dark header-cta" href="/#book-fitting">
            Book a fitting
          </Link>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
              <Link className="button button-gold" href="/#book-fitting">Book a fitting</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

