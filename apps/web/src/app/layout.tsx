import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Oveena Bridal Dresses",
    template: "%s | Oveena Bridal Dresses",
  },
  description:
    "Bridal dresses, engagement outfits and bridesmaids' outfits for rent and sale in Hanwella, Sri Lanka.",
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
