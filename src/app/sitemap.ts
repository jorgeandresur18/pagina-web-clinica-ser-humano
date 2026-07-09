import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

const BASE = "https://clinicaserhumano.ec";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE,                                          priority: 1.0,  changeFrequency: "weekly"  },
    { url: `${BASE}/nosotros`,                            priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/novedades`,                           priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${BASE}/servicios`,                               priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/servicios/neuromodulacion`,           priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/servicios/neurolab`,                  priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/servicios/nadia-donadonibus`,         priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/servicios/programa-ser`,              priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/politica-de-privacidad`,              priority: 0.3,  changeFrequency: "yearly"  },
    { url: `${BASE}/terminos-y-condiciones`,              priority: 0.3,  changeFrequency: "yearly"  },
  ] satisfies MetadataRoute.Sitemap;

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/novedades/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...blogRoutes];
}
