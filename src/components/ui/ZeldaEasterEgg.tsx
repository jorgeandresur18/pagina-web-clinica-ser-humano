"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SILENT = 19;
const TOTAL  = 30;

function ZeldaGameModal({ onClose }: { onClose: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const t = setTimeout(() => iframeRef.current?.focus(), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col md:items-center md:justify-center md:p-3"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-full h-full md:h-auto md:max-w-[620px] md:rounded-md overflow-hidden"
        style={{ background: "#111" }}
      >
        <div className="flex items-center justify-between px-4 py-2" style={{ background: "#566597" }}>
          <span style={{ color: "#fff", fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>
            THE LEGEND OF ZELDA
          </span>
          <button
            onClick={onClose}
            style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", fontSize: 18, lineHeight: 1 }}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
        <iframe
          ref={iframeRef}
          src="/games/zelda.html"
          className="w-full flex-1 md:flex-none md:h-[420px] block"
          style={{ border: "none", background: "#000" }}
          allowFullScreen
          title="The Legend of Zelda NES"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-downloads"
        />
      </div>
    </div>
  );
}

export default function ZeldaEasterEgg({ nombre, cargo, foto, objPos }: {
  nombre: string;
  cargo: string;
  foto: string;
  objPos: string;
}) {
  const [count, setCount] = useState(0);
  const [open, setOpen]   = useState(false);

  const countdown = count > SILENT ? TOTAL - count : null;
  const showBall  = countdown !== null && countdown > 0;

  function handleClick() {
    setCount((n) => {
      const next = n + 1;
      if (next >= TOTAL) { setOpen(true); return 0; }
      return next;
    });
  }

  return (
    <>
      <div
        className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer select-none"
        onClick={handleClick}
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={foto}
            alt={nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: objPos }}
          />
        </div>
        <div className="p-5">
          <p className="font-black text-[#4f5571]">{nombre}</p>
          <p className="mt-1 text-sm text-[#566597]">{cargo}</p>
        </div>
      </div>

      <AnimatePresence>
        {showBall && (
          <motion.div
            key={countdown}
            initial={{ scale: 1.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="fixed inset-0 z-[290] flex items-center justify-center pointer-events-none"
          >
            <div
              className="flex h-28 w-28 items-center justify-center rounded-full shadow-2xl"
              style={{ background: "#566597" }}
            >
              <span className="text-4xl font-black text-white">{countdown}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && <ZeldaGameModal onClose={() => setOpen(false)} />}
    </>
  );
}