"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SUBMARCAS, getWhatsappUrl } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          {NAV_LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange">
              Servicios
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" size="sm">
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

              <p className="px-2 pt-2 text-xs font-medium uppercase tracking-wide text-brand-gray-light">
                Servicios
              </p>
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

              {NAV_LINKS.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-brand-gray-dark hover:bg-brand-base hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              ))}

              <Button
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full"
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
