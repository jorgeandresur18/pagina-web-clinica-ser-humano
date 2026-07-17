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
        {/* Controles — solo desktop */}
        <div
          className="hidden md:flex items-center justify-center gap-5 px-4 py-3 flex-shrink-0"
          style={{ background: "#181818", borderTop: "1px solid #2a2a2a" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ display: "flex" }}>
              <span style={{ display:"inline-block", background:"#2a2a2a", border:"1px solid #444", borderBottom:"2px solid #555", borderRadius:3, padding:"2px 7px", fontSize:11, color:"#fff", fontFamily:"monospace", lineHeight:1.4 }}>↑</span>
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {["←","↓","→"].map(k => (
                <span key={k} style={{ display:"inline-block", background:"#2a2a2a", border:"1px solid #444", borderBottom:"2px solid #555", borderRadius:3, padding:"2px 7px", fontSize:11, color:"#fff", fontFamily:"monospace", lineHeight:1.4 }}>{k}</span>
              ))}
            </div>
          </div>
          <span style={{ fontSize: 9, color: "#555", letterSpacing: "0.1em" }}>MOVER</span>
          <span style={{ display: "block", width: 1, height: 30, background: "#333", flexShrink: 0 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {[["Z","B"],["X","A"]].map(([k,l]) => (
              <span key={k} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <span style={{ display:"inline-block", background:"#2a2a2a", border:"1px solid #444", borderBottom:"2px solid #555", borderRadius:3, padding:"2px 7px", fontSize:11, color:"#fff", fontFamily:"monospace", lineHeight:1.4 }}>{k}</span>
                <span style={{ fontSize:10, color:"#888" }}>{l}</span>
              </span>
            ))}
          </div>
          <span style={{ display: "block", width: 1, height: 30, background: "#333", flexShrink: 0 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {[["Enter","Start"],["Bksp","Sel"]].map(([k,l]) => (
              <span key={k} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <span style={{ display:"inline-block", background:"#2a2a2a", border:"1px solid #444", borderBottom:"2px solid #555", borderRadius:3, padding:"2px 4px", fontSize:10, color:"#ccc", fontFamily:"monospace", lineHeight:1.4 }}>{k}</span>
                <span style={{ fontSize:10, color:"#888" }}>{l}</span>
              </span>
            ))}
          </div>
        </div>
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