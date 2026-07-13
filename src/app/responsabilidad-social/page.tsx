import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { RESP_SOCIAL_PROYECTOS } from "@/lib/constants";

export const metadata = buildMeta({
  title: "Responsabilidad Social | Clínica Ser Humano",
  description:
    "Nuestro compromiso con la comunidad a través de programas sociales de impacto real. Conoce los proyectos de la Fundación Ser Humano en Guayaquil.",
  path: "/responsabilidad-social",
});

export default function ResponsabilidadSocialPage() {
  return (
    <div className="min-h-screen bg-brand-base">
      {/* Hero */}
      <div className="bg-brand-gray-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Compromiso con la comunidad
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Responsabilidad Social
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Desde la Fundación Ser Humano trabajamos por el bienestar de quienes
            más lo necesitan, con programas de impacto real en nuestra comunidad.
          </p>
        </div>
      </div>

      {/* Proyectos */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {RESP_SOCIAL_PROYECTOS.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.imagen}
                  alt={p.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                    {p.tagline}
                  </p>
                  <h2 className="mt-1 text-xl font-black text-brand-gray-dark">
                    {p.nombre}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-dark/70">
                    {p.descripcion}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#e25c08]"
                  >
                    Conocer más
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-brand-orange px-8 py-12 text-center">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            ¿Quieres ser parte del cambio?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Contáctanos para conocer cómo puedes apoyar nuestros programas sociales
            y contribuir al bienestar de nuestra comunidad.
          </p>
          <a
            href="mailto:info@proyectorenacerec.org"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-white/90"
          >
            Contáctanos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}