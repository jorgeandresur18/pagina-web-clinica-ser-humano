import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, User } from "lucide-react";
import { getPost, getAdjacentPosts } from "@/lib/blog";
import { buildMeta, BASE_URL } from "@/lib/seo";
import { articleSchema } from "@/lib/schemas";
import JsonLd from "@/components/seo/JsonLd";
import CommentForm from "@/components/blog/CommentForm";
import ShareButtons from "@/components/blog/ShareButtons";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMeta({
    title: `${post.title} | Ser Humano Salud Integral`,
    description: post.excerpt,
    path: `/novedades/${post.slug}`,
    image: `${BASE_URL}${post.image}`,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

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
      {/* ── ARTICLE ── */}
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
          <span className="flex items-center gap-1.5">
            <User size={14} /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {post.date}
          </span>
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

        <div
          className="blog-content mt-10 text-[#616569]/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags + Share */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-8">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-[#616569]/40" />
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-[#ebece8] px-3 py-1 text-xs text-[#616569]">
                {t}
              </span>
            ))}
          </div>
          <ShareButtons title={post.title} />
        </div>
      </article>

      {/* ── PREV / NEXT ── */}
      <div className="border-t border-gray-100 bg-[#ebece8]">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-6 px-6 py-10">
          {prev && (
            <Link href={`/novedades/${prev.slug}`} className="group flex items-start gap-3">
              <ArrowLeft size={18} className="mt-0.5 shrink-0 text-[#ff6b12]" />
              <div>
                <p className="text-xs uppercase text-[#616569]/50">Artículo anterior</p>
                <p className="mt-1 font-bold text-[#616569] transition-colors group-hover:text-[#ff6b12]">
                  {prev.title}
                </p>
              </div>
            </Link>
          )}
          {next && (
            <Link href={`/novedades/${next.slug}`} className="group ml-auto flex items-start gap-3 text-right">
              <div>
                <p className="text-xs uppercase text-[#616569]/50">Artículo siguiente</p>
                <p className="mt-1 font-bold text-[#616569] transition-colors group-hover:text-[#ff6b12]">
                  {next.title}
                </p>
              </div>
              <ArrowRight size={18} className="mt-0.5 shrink-0 text-[#ff6b12]" />
            </Link>
          )}
        </div>
      </div>

      {/* ── COMENTARIOS ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-black text-[#616569]">Deja un comentario</h2>
          <p className="mt-1 text-sm text-[#616569]/50">
            Tu correo electrónico no será publicado.
          </p>
          <CommentForm />
        </div>
      </section>
    </div>
  );
}
