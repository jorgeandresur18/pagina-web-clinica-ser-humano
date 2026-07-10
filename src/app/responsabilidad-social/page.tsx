import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsabilidad Social | Clínica Ser Humano",
  description: "Nuestro compromiso con la comunidad y el bienestar social desde Clínica Ser Humano.",
};

export default function ResponsabilidadSocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#616569]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#616569] to-[#3a3c3e]" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-black text-white">Responsabilidad Social</h1>
          <p className="mt-3 text-white/70">Nuestro compromiso con la comunidad</p>
        </div>
      </section>

      {/* Sección en construcción */}
      <section className="bg-[#ebece8] py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">

          {/* Ícono */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#ff6b12]/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6b12"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-[#616569]">
            Página en construcción
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#616569]/70">
            Estamos trabajando en esta sección para contarte todo sobre nuestro
            compromiso con la comunidad, programas de bienestar social y
            las iniciativas que llevamos adelante desde Clínica Ser Humano.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b12]/10 px-5 py-2.5 text-sm font-semibold text-[#ff6b12]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b12] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6b12]" />
            </span>
            Próximamente disponible
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#616569] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3a3c3e]"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}