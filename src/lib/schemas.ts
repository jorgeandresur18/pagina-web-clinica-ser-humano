import { BASE_URL as BASE } from "@/lib/seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${BASE}/#clinic`,
  name: "Clínica Ser Humano",
  alternateName: "Instituto Clínico Ser Humano",
  url: BASE,
  logo: `${BASE}/logos/serhumano.png`,
  image: `${BASE}/fotos/nosotros-hero.png`,
  description:
    "Acompañamos procesos de recuperación y bienestar desde una visión humana, integral y clínicamente precisa en Guayaquil, Ecuador.",
  telephone: "+593969520111",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guayaquil",
    addressRegion: "Guayas",
    addressCountry: "EC",
  },
  sameAs: [
    "https://instagram.com/clinicaserhumanoec",
    "https://facebook.com/clinicaserhumano",
    "https://tiktok.com/@clinicaserhumanoec",
    "https://linkedin.com/company/clinicaserhumano",
    "https://youtube.com/@clinicaserhumano",
  ],
  medicalSpecialty: [
    "Psychiatry",
    "Neurology",
    "Psychology",
    "Addiction Medicine",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Clínica Ser Humano",
  publisher: { "@id": `${BASE}/#clinic` },
  inLanguage: "es-EC",
};

export function servicePageSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url,
    image,
    inLanguage: "es-EC",
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#clinic` },
    audience: { "@type": "Patient" },
  };
}

export function physicianSchema({
  name,
  description,
  url,
  image,
  jobTitle,
  specialty,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  jobTitle: string;
  specialty: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    description,
    url,
    image,
    jobTitle,
    medicalSpecialty: specialty,
    worksFor: { "@id": `${BASE}/#clinic` },
  };
}

export function articleSchema({
  title,
  excerpt,
  slug,
  image,
  date,
}: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    image: `${BASE}${image}`,
    url: `${BASE}/novedades/${slug}`,
    inLanguage: "es-EC",
    datePublished: date,
    publisher: { "@id": `${BASE}/#clinic` },
    author: {
      "@type": "Organization",
      name: "Clínica Ser Humano",
    },
    isPartOf: { "@id": `${BASE}/#website` },
  };
}
