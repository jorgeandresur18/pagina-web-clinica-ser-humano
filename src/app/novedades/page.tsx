import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Novedades | Clínica Ser Humano",
  description: "Artículos y novedades sobre salud mental, neurociencia y bienestar integral.",
  path: "/novedades",
});

export default function NovedadesPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#616569]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#616569] to-[#3a3c3e]" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-black text-white">Novedades</h1>
          <p className="mt-3 text-white/70">Artículos sobre salud, neurociencia y bienestar</p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className="bg-[#ebece8] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Card destacada */}
            {featured && (
              <Link
                href={`/novedades/${featured.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md md:col-span-1"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                  {/* Imagen de fondo, visible siempre en featured */}
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="mb-3 inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-[#616569]">
                      {featured.category}
                    </span>
                    <h2 className="text-lg font-black leading-snug text-white">
                      {featured.title}
                    </h2>
                    <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                      <User size={12} />
                      <span>{featured.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Cards secundarias — mismo estilo que la destacada */}
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/novedades/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-[#616569]">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-black leading-snug text-white">
                      {post.title}
                    </h2>
                    <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
