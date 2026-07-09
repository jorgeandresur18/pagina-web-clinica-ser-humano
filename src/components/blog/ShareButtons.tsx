"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-[#616569]/50">Compartir:</span>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank" rel="noopener noreferrer" title="Compartir en Facebook"
        className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#ebece8] transition-colors hover:bg-[#1877F2]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#616569] transition-colors group-hover:fill-white">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank" rel="noopener noreferrer" title="Compartir en X"
        className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#ebece8] transition-colors hover:bg-black"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#616569] transition-colors group-hover:fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank" rel="noopener noreferrer" title="Compartir en LinkedIn"
        className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#ebece8] transition-colors hover:bg-[#0A66C2]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#616569] transition-colors group-hover:fill-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      <button
        onClick={copyLink} title="Copiar enlace"
        className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#ebece8] transition-colors hover:bg-[#ff6b12]"
      >
        {copied
          ? <Check size={15} className="text-[#ff6b12] transition-colors group-hover:text-white" />
          : <Link2 size={15} className="text-[#616569] transition-colors group-hover:text-white" />
        }
      </button>
    </div>
  );
}
