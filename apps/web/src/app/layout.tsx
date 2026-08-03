import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Oveena Bridal Dresses",
    template: "%s | Oveena Bridal Dresses",
  },
  description:
    "Bridal dresses, engagement outfits and bridesmaids' outfits for rent and sale in Hanwella, Sri Lanka.",
  openGraph: {
    type: "website",
    locale: "en_LK",
    title: "Oveena Bridal Dresses",
    description: "Elegance that makes memories. Discover bridal style and private fittings in Hanwella, Sri Lanka.",
    siteName: "Oveena Bridal Dresses",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Oveena Bridal Dresses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oveena Bridal Dresses",
    description: "Elegance that makes memories.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
