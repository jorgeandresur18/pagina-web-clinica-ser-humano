import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { BLOG_POSTS } from "@/lib/blog";
import { buildMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMeta({
  title: "Novedades | Clínica Ser Humano",
  description: "Artículos y novedades sobre salud mental, neurociencia y bienestar integral.",
  path: "/novedades",
});

type SupaPost = {
  id: number;
  titulo: string;
  slug: string;
  extracto: string | null;
  autor: string | null;
  categoria: string | null;
  imagen_url: string | null;
  creado_en: string;
};

async function getSupaPosts(): Promise<SupaPost[]> {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  const { data } = await supabase
    .from("entradas_blog")
    .select("id, titulo, slug, extracto, autor, categoria, imagen_url, creado_en")
    .eq("publicado", true)
    .order("creado_en", { ascending: false });
  return data ?? [];
}

type UnifiedPost = {
  slug: string;
  title: string;
  author: string;
  category: string;
  image: string | null;
  isStatic: boolean;
};

export default async function NovedadesPage() {
  const supaPosts = await getSupaPosts();

  const staticPosts: UnifiedPost[] = BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    author: p.author,
    category: p.category,
    image: p.image,
    isStatic: true,
  }));

  const dynamicPosts: UnifiedPost[] = supaPosts.map((p) => ({
    slug: p.slug,
    title: p.titulo,
    author: p.autor ?? "Clínica Ser Humano",
    category: p.categoria ?? "Novedades",
    image: p.imagen_url,
    isStatic: false,
  }));

  const allPosts = [...dynamicPosts, ...staticPosts];
  const [featured, ...rest] = allPosts;

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
          {allPosts.length === 0 ? (
            <p className="text-center text-[#616569]/60">Próximamente publicaremos artículos aquí.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">

              {featured && (
                <Link
                  href={`/novedades/${featured.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-md md:col-span-1"
                >
                  <PostCard post={featured} />
                </Link>
              )}

              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/novedades/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-md"
                >
                  <PostCard post={post} />
                </Link>
              ))}

            </div>
          )}
        </div>
      </section>
    </>
  );
}

function PostCard({ post }: { post: UnifiedPost }) {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-2xl">
      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-[#616569] to-[#3a3c3e]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="mb-3 inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-[#616569]">
          {post.category}
        </span>
        <h2 className="text-lg font-black leading-snug text-white">{post.title}</h2>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
          <User size={12} />
          <span>{post.author}</span>
        </div>
      </div>
    </div>
  );
}
