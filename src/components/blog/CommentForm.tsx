"use client";

import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setComment("");
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center text-green-700">
        <p className="font-bold">¡Gracias por tu comentario!</p>
        <p className="mt-1 text-sm">Será revisado y publicado pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-[#616569]">
            Nombre <span className="text-[#ff6b12]">*</span>
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ff6b12] transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-[#616569]">
            Correo electrónico <span className="text-[#ff6b12]">*</span>
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ff6b12] transition-colors"
            placeholder="tu@correo.com"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-[#616569]">
          Comentario <span className="text-[#ff6b12]">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ff6b12] transition-colors"
          placeholder="Escribe tu comentario aquí..."
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-[#ff6b12] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#e85d00]"
      >
        Publicar comentario
      </button>
    </form>
  );
}
