"use client";

import { useState } from "react";
import Link from "next/link";

export default function CommentForm({ slug }: { slug: string }) {
  const [nombre, setNombre]       = useState("");
  const [comentario, setComentario] = useState("");
  const [consent, setConsent]     = useState(false);
  const [status, setStatus]       = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errors, setErrors]       = useState<{ nombre?: string; comentario?: string; consent?: string }>({});

  function validate() {
    const e: typeof errors = {};
    if (!nombre.trim() || nombre.trim().length < 2) e.nombre = "Ingresa tu nombre.";
    if (!comentario.trim() || comentario.trim().length < 5) e.comentario = "El comentario es demasiado corto.";
    if (!consent) e.consent = "Debes aceptar la política de privacidad para continuar.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, nombre: nombre.trim(), comentario: comentario.trim() }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center text-green-700">
        <p className="font-bold">¡Gracias por tu comentario!</p>
        <p className="mt-1 text-sm">Será revisado y publicado en breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-[#616569]">
          Nombre <span className="text-[#ff6b12]">*</span>
        </label>
        <input
          value={nombre}
          onChange={(e) => { setNombre(e.target.value); setErrors(p => ({ ...p, nombre: undefined })); }}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ff6b12] transition-colors"
          placeholder="Tu nombre"
        />
        {errors.nombre && <p className="mt-1 text-xs text-red-500">{errors.nombre}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-[#616569]">
          Comentario <span className="text-[#ff6b12]">*</span>
        </label>
        <textarea
          rows={5}
          value={comentario}
          onChange={(e) => { setComentario(e.target.value); setErrors(p => ({ ...p, comentario: undefined })); }}
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ff6b12] transition-colors"
          placeholder="Escribe tu comentario aquí..."
        />
        {errors.comentario && <p className="mt-1 text-xs text-red-500">{errors.comentario}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setErrors(p => ({ ...p, consent: undefined })); }}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#ff6b12]"
          />
          <span className="text-xs leading-relaxed text-[#616569]/70">
            He leído y acepto la{" "}
            <Link href="/politica-de-privacidad" target="_blank" className="text-[#ff6b12] underline underline-offset-2">
              Política de Protección de Datos Personales
            </Link>{" "}
            y autorizo el tratamiento de mis datos para publicar este comentario.
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-500">
          Hubo un error al enviar. Inténtalo de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#ff6b12] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#e85d00] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Publicar comentario"}
      </button>
    </form>
  );
}
