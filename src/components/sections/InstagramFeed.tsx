"use client";
import { useEffect, useState } from "react";
import { Play, Images } from "lucide-react";

type Post = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
};

const IG_PROFILE = "https://www.instagram.com/clinicaserhumanoec/";

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function InstagramFeed() {
  const [posts, setPosts]   = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then(r => r.json())
      .then(data => { setPosts(Array.isArray(data) ? data.slice(0, 6) : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (!loading && posts.length === 0) return null;

  return (
    <section className="bg-[#ebece8] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6b12]/15 px-4 py-1.5 text-sm font-bold text-[#ff6b12]">
            <IgIcon />
            Instagram
          </span>
          <h2 className="text-3xl font-black text-[#616569] md:text-4xl">
            Síguenos en Instagram
          </h2>
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#616569]/60 transition-colors hover:text-[#ff6b12]"
          >
            @clinicaserhumanoec
          </a>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square animate-pulse rounded-xl bg-[#616569]/15" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {posts.map(post => {
              const img = post.media_type === "VIDEO" ? (post.thumbnail_url ?? post.media_url) : post.media_url;
              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-[#616569]/15"
                >
                  <img
                    src={img}
                    alt={post.caption?.slice(0, 80) ?? "Publicación de Instagram"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100">
                    {post.caption && (
                      <p className="line-clamp-3 text-xs leading-relaxed text-white">
                        {post.caption}
                      </p>
                    )}
                  </div>
                  {/* Type badge */}
                  {post.media_type === "VIDEO" && (
                    <div className="absolute right-2 top-2 rounded-full bg-black/40 p-1.5">
                      <Play size={11} className="fill-white text-white" />
                    </div>
                  )}
                  {post.media_type === "CAROUSEL_ALBUM" && (
                    <div className="absolute right-2 top-2 rounded-full bg-black/40 p-1.5">
                      <Images size={11} className="text-white" />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#616569]/25 px-6 py-3 text-sm font-semibold text-[#616569] transition-colors hover:border-[#ff6b12] hover:text-[#ff6b12]"
          >
            <IgIcon />
            Ver más publicaciones
          </a>
        </div>
      </div>
    </section>
  );
}