import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, User } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { BLOG_POSTS, getPost, getAdjacentPosts } from "@/lib/blog";
import { buildMeta, BASE_URL } from "@/lib/seo";
import { articleSchema } from "@/lib/schemas";
import JsonLd from "@/components/seo/JsonLd";
import CommentForm from "@/components/blog/CommentForm";
import ShareButtons from "@/components/blog/ShareButtons";

type Comment = { id: number; nombre: string; comentario: string; creado_en: string };
type Props = { params: { slug: string } };

type SupaPost = {
  id: number;
  titulo: string;
  slug: string;
  extracto: string | null;
  contenido: string | null;
  autor: string | null;
  categoria: string | null;
  etiquetas: string[] | null;
  imagen_url: string | null;
  creado_en: string;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

async function getSupaPost(slug: string): Promise<SupaPost | null> {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  const { data } = await supabase
    .from("entradas_blog")
    .select("*")
    .eq("slug", slug)
    .eq("publicado", true)
    .single();
  return data ?? null;
}

export async function generateMetadata({ params }: Props) {
  const static_ = getPost(params.slug);
  if (static_) {
    return buildMeta({
      title: `${static_.title} | Clínica Ser Humano`,
      description: static_.excerpt,
      path: `/novedades/${static_.slug}`,
      image: `${BASE_URL}${static_.image}`,
    });
  }
  const supa = await getSupaPost(params.slug);
  if (!supa) return {};
  return buildMeta({
    title: `${supa.titulo} | Clínica Ser Humano`,
    description: supa.extracto ?? "",
    path: `/novedades/${supa.slug}`,
    image: supa.imagen_url ?? undefined,
  });
}

async function getComments(slug: string): Promise<Comment[]> {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  const { data } = await supabase
    .from("comments")
    .select("id, nombre, comentario, creado_en")
    .eq("slug", slug)
    .eq("aprobado", true)
    .order("creado_en", { ascending: true });
  return data ?? [];
}

export default async function BlogPostPage({ params }: Props) {
  const staticPost = getPost(params.slug);
  const supaPost = staticPost ? null : await getSupaPost(params.slug);

  if (!staticPost && !supaPost) notFound();

  const comments = await getComments(params.slug);

  /* ── Artículo de Supabase ── */
  if (supaPost) {
    const fecha = new Date(supaPost.creado_en).toLocaleDateString("es-EC", {
      year: "numeric", month: "long", day: "numeric",
    });
    return (
      <div className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-6">
            <span className="rounded-full bg-[#ff6b12]/10 px-3 py-1 text-xs font-bold uppercase text-[#ff6b12]">
              {supaPost.categoria ?? "Novedades"}
            </span>
          </div>
          <h1 className="text-3xl font-black leading-tight text-[#616569] md:text-4xl">
            {supaPost.titulo}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#616569]/55">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {supaPost.autor ?? "Clínica Ser Humano"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {fecha}
            </span>
          </div>
          {supaPost.imagen_url && (
            <div className="mt-8 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={supaPost.imagen_url}
                alt={supaPost.titulo}
                className="h-72 w-full object-cover md:h-96"
              />
            </div>
          )}
          <div
            className="blog-content mt-10 text-[#616569]/80"
            dangerouslySetInnerHTML={{ __html: supaPost.contenido ?? "" }}
          />
          {supaPost.etiquetas && supaPost.etiquetas.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-[#616569]/40" />
                {supaPost.etiquetas.map((t) => (
                  <span key={t} className="rounded-full bg-[#ebece8] px-3 py-1 text-xs text-[#616569]">
                    {t}
                  </span>
                ))}
              </div>
              <ShareButtons title={supaPost.titulo} />
            </div>
          )}
        </article>
        <CommentsSection slug={params.slug} comments={comments} />
      </div>
    );
  }

  /* ── Artículo estático (blog.ts) ── */
  const post = staticPost!;
  const { prev, next } = getAdjacentPosts(params.slug);

  return (
    <div className="bg-white">
      <JsonLd data={articleSchema({
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        image: `${BASE_URL}${post.image}`,
        date: post.date,
      })} />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-6">
          <span className="rounded-full bg-[#ff6b12]/10 px-3 py-1 text-xs font-bold uppercase text-[#ff6b12]">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl font-black leading-tight text-[#616569] md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#616569]/55">
          <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={500}
            className="h-72 w-full object-cover md:h-96"
          />
        </div>
        <div className="blog-content mt-10 text-[#616569]/80" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-8">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-[#616569]/40" />
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-[#ebece8] px-3 py-1 text-xs text-[#616569]">{t}</span>
            ))}
          </div>
          <ShareButtons title={post.title} />
        </div>
      </article>

      <div className="border-t border-gray-100 bg-[#ebece8]">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-6 px-6 py-10">
          {prev && (
            <Link href={`/novedades/${prev.slug}`} className="group flex items-start gap-3">
              <ArrowLeft size={18} className="mt-0.5 shrink-0 text-[#ff6b12]" />
              <div>
                <p className="text-xs uppercase text-[#616569]/50">Artículo anterior</p>
                <p className="mt-1 font-bold text-[#616569] transition-colors group-hover:text-[#ff6b12]">{prev.title}</p>
              </div>
            </Link>
          )}
          {next && (
            <Link href={`/novedades/${next.slug}`} className="group ml-auto flex items-start gap-3 text-right">
              <div>
                <p className="text-xs uppercase text-[#616569]/50">Artículo siguiente</p>
                <p className="mt-1 font-bold text-[#616569] transition-colors group-hover:text-[#ff6b12]">{next.title}</p>
              </div>
              <ArrowRight size={18} className="mt-0.5 shrink-0 text-[#ff6b12]" />
            </Link>
          )}
        </div>
      </div>

      <CommentsSection slug={params.slug} comments={comments} />
    </div>
  );
}

function CommentsSection({ slug, comments }: { slug: string; comments: Comment[] }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        {comments.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-black text-[#616569]">
              {comments.length === 1 ? "1 comentario" : `${comments.length} comentarios`}
            </h2>
            <div className="flex flex-col gap-5">
              {comments.map((c) => (
                <div key={c.id} className="rounded-2xl bg-[#f8f8f6] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff6b12]/15 text-sm font-bold text-[#ff6b12]">
                      {c.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#616569]">{c.nombre}</p>
                      <p className="text-xs text-[#616569]/50">
                        {new Date(c.creado_en).toLocaleDateString("es-EC", {
                          year: "numeric", month: "long", day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#616569]/80">{c.comentario}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <h2 className="text-2xl font-black text-[#616569]">Deja un comentario</h2>
        <p className="mt-1 text-sm text-[#616569]/50">Tu comentario será revisado antes de publicarse.</p>
        <CommentForm slug={slug} />
      </div>
    </section>
  );
}
