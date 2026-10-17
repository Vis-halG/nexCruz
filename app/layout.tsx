import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nexCruz | Practical Digital Systems",
  applicationName: "nexCruz",
  description:
    "nexCruz builds dependable websites, apps, and automation systems for growing businesses.",
  openGraph: {
    title: "nexCruz | Practical Digital Systems",
    description:
      "nexCruz builds dependable websites, apps, and automation systems for growing businesses.",
    siteName: "nexCruz",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "nexCruz | Practical Digital Systems",
    description:
      "nexCruz builds dependable websites, apps, and automation systems for growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
