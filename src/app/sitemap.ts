import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

const BASE = "https://clinicaserhumano.ec";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                    priority: 1.0, changeFrequency: "weekly"  },
    { url: `${BASE}/nosotros`,                      priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/novedades`,                     priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE}/servicios`,                     priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/servicios/neuromodulacion`,     priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/servicios/neurolab`,            priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/servicios/nadia-donadonibus`,   priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/servicios/programa-ser`,        priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/responsabilidad-social`,        priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/politica-de-privacidad`,        priority: 0.3, changeFrequency: "yearly"  },
    { url: `${BASE}/terminos-y-condiciones`,        priority: 0.3, changeFrequency: "yearly"  },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );
    const { data } = await supabase
      .from("entradas_blog")
      .select("slug, creado_en")
      .eq("publicado", true);

    if (data) {
      blogRoutes = data.map((post) => ({
        url: `${BASE}/novedades/${post.slug}`,
        lastModified: new Date(post.creado_en),
        priority: 0.7,
        changeFrequency: "monthly",
      }));
    }
  } catch {
    // Si Supabase falla, el sitemap se genera sin artículos
  }

  return [...staticRoutes, ...blogRoutes];
}