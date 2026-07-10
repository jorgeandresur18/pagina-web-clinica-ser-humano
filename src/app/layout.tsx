import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicaserhumano.ec"),
  title: {
    default: "Clínica Ser Humano | Recuperar equilibrio también es salud",
    template: "%s | Clínica Ser Humano",
  },
  description:
    "Acompañamos procesos de recuperación y bienestar desde una visión humana, integral y clínicamente precisa en Guayaquil, Ecuador.",
  openGraph: {
    title: "Clínica Ser Humano",
    description: "Acompañamos procesos de recuperación y bienestar desde una visión humana, integral y clínicamente precisa en Guayaquil, Ecuador.",
    url: "https://clinicaserhumano.ec",
    siteName: "Clínica Ser Humano",
    locale: "es_EC",
    type: "website",
    images: [{ url: "/fotos/nosotros-hero.png", width: 1200, height: 630, alt: "Equipo Clínica Ser Humano" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Ser Humano",
    description: "Acompañamos procesos de recuperación y bienestar desde una visión humana, integral y clínicamente precisa en Guayaquil, Ecuador.",
    images: ["/fotos/nosotros-hero.png"],
  },
  alternates: { canonical: "https://clinicaserhumano.ec" },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png",  sizes: "57x57" },
      { url: "/apple-icon-60x60.png",  sizes: "60x60" },
      { url: "/apple-icon-72x72.png",  sizes: "72x72" },
      { url: "/apple-icon-76x76.png",  sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "msapplication-config", url: "/browserconfig.xml" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin = headers().get("x-is-admin") === "1";

  return (
    <html lang="es">
      <head />
      <body className={`${outfit.variable} font-sans antialiased bg-brand-base text-brand-gray-dark`}>
        {!isAdmin && <JsonLd data={organizationSchema} />}
        {!isAdmin && <JsonLd data={websiteSchema} />}
        {!isAdmin && <Navbar />}
        <main className={isAdmin ? "" : "pt-[72px]"}>{children}</main>
        {!isAdmin && <Footer />}
        {!isAdmin && <WhatsAppButton />}
        {!isAdmin && <CookieBanner />}
        {!isAdmin && (
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6a46860d686a90131bee5f0f"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
