"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SUBMARCAS, RESP_SOCIAL_PROYECTOS, getWhatsappUrl } from "@/lib/constants";
import { pushEvent } from "@/lib/gtm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logos/clinica.png"
            alt="Clínica Ser Humano"
            width={150}
            height={55}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* Inicio, Nosotros */}
          {NAV_LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}

          {/* Servicios dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/servicios"
              className="flex items-center gap-1 text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
            >
              Servicios
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full w-64 rounded-xl bg-white p-2 shadow-lg"
                >
                  {SUBMARCAS.map((marca) => (
                    <Link
                      key={marca.slug}
                      href={marca.href}
                      className="block rounded-lg px-4 py-3 text-sm text-brand-gray-dark transition-colors hover:bg-brand-base hover:text-brand-orange"
                    >
                      {marca.nombre}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-brand-base pt-1">
                    <Link
                      href="/servicios"
                      className="block rounded-lg px-4 py-2.5 text-xs font-semibold text-brand-orange transition-colors hover:bg-brand-base"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Novedades */}
          <Link
            href={NAV_LINKS[2].href}
            className="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
          >
            {NAV_LINKS[2].label}
          </Link>

          {/* Resp. Social dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSocialOpen(true)}
            onMouseLeave={() => setSocialOpen(false)}
          >
            <Link
              href="/responsabilidad-social"
              className="flex items-center gap-1 text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
            >
              Resp. Social
              <ChevronDown size={16} className={`transition-transform ${socialOpen ? "rotate-180" : ""}`} />
            </Link>
            <AnimatePresence>
              {socialOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full w-64 rounded-xl bg-white p-2 shadow-lg"
                >
                  {RESP_SOCIAL_PROYECTOS.map((p) => (
                    <Link
                      key={p.slug}
                      href={p.href}
                      className="block rounded-lg px-4 py-3 text-sm text-brand-gray-dark transition-colors hover:bg-brand-base hover:text-brand-orange"
                    >
                      {p.nombre}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-brand-base pt-1">
                    <Link
                      href="/responsabilidad-social"
                      className="block rounded-lg px-4 py-2.5 text-xs font-semibold text-brand-orange transition-colors hover:bg-brand-base"
                    >
                      Ver todos los proyectos →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contacto */}
          <Link
            href={NAV_LINKS[3].href}
            className="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
          >
            {NAV_LINKS[3].label}
          </Link>
        </div>

        <div className="hidden md:block">
          <Button href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" size="sm" onClick={() => pushEvent("reservar_cita_click", { location: "navbar_desktop" })}>
            Reservar cita
          </Button>
        </div>

        <button
          className="text-brand-gray-dark md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-brand-gray-light bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/servicios"
                onClick={() => setMobileOpen(false)}
                className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-orange hover:underline"
              >
                Servicios
              </Link>
              {SUBMARCAS.map((marca) => (
                <Link
                  key={marca.slug}
                  href={marca.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
                >
                  {marca.nombre}
                </Link>
              ))}

              <Link
                href={NAV_LINKS[2].href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
              >
                {NAV_LINKS[2].label}
              </Link>

              <Link
                href="/responsabilidad-social"
                onClick={() => setMobileOpen(false)}
                className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-orange hover:underline"
              >
                Resp. Social
              </Link>
              {RESP_SOCIAL_PROYECTOS.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
                >
                  {p.nombre}
                </Link>
              ))}

              <Link
                href={NAV_LINKS[3].href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
              >
                {NAV_LINKS[3].label}
              </Link>

              <Button
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full"
                onClick={() => pushEvent("reservar_cita_click", { location: "navbar_mobile" })}
              >
                Reservar cita
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}