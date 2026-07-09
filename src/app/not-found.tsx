import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";

export const metadata = {
  title: "Página no encontrada | Ser Humano Salud Integral",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#ebece8] px-6 py-24 text-center">
      {/* Número grande decorativo */}
      <div className="relative select-none">
        <span className="text-[10rem] font-black leading-none text-[#ff6b12]/10 md:text-[14rem]">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-[#ff6b12] p-5 shadow-xl">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-3xl font-black text-[#616569] md:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-[#616569]/65 leading-relaxed">
        La página que buscas no existe o fue movida. Puedes volver al inicio
        o contactarnos directamente.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#ff6b12] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#e85d00] hover:shadow-lg"
        >
          <Home size={16} />
          Ir al inicio
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#616569]/30 bg-white px-6 py-3 text-sm font-bold text-[#616569] transition-all hover:border-[#ff6b12] hover:text-[#ff6b12]"
        >
          <Phone size={16} />
          Contacto
        </Link>
      </div>

      {/* Links útiles */}
      <div className="mt-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#616569]/40">
          Quizás buscabas
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { href: "/servicios/neuromodulacion", label: "Neuroni" },
            { href: "/servicios/nadia-donadonibus", label: "Psicoterapia" },
            { href: "/servicios/programa-ser", label: "Programa SER" },
            { href: "/novedades", label: "Novedades" },
            { href: "/nosotros", label: "Nosotros" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#616569] shadow-sm transition-all hover:text-[#ff6b12]"
            >
              <ArrowLeft size={12} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
