import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Iron Forest FC | Huntsville, TX USL League Two Soccer",
  description: "Official teaser page for Iron Forest FC, Huntsville Texas' upcoming pre-professional soccer club. Kicking off in USL League Two Summer 2027.",
  keywords: ["Iron Forest FC", "Huntsville Soccer", "Huntsville TX Soccer", "USL2 Huntsville", "USL League Two", "East Texas Soccer", "Leu Soccer Coach"],
  openGraph: {
    title: "Iron Forest FC | Huntsville, TX USL League Two Soccer",
    description: "Official teaser page for Iron Forest FC. Soccer kicks off in Huntsville, TX, Summer 2027.",
    url: "https://ironforestfc.com",
    siteName: "Iron Forest FC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Forest FC | Huntsville, TX USL League Two Soccer",
    description: "Join the forest. Huntsville's new pre-professional soccer club kicking off Summer 2027.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#070908" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
