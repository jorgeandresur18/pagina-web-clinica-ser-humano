import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const sb = () =>
  createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);

export async function GET() {
  const { data, error } = await sb()
    .from("entradas_blog")
    .select("*")
    .order("creado_en", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { titulo, slug, extracto, contenido, autor, categoria, etiquetas, imagen_url, publicado } = body;

  if (!titulo?.trim() || !slug?.trim()) {
    return NextResponse.json({ error: "Título y slug son obligatorios." }, { status: 400 });
  }

  const { data, error } = await sb()
    .from("entradas_blog")
    .insert({ titulo, slug, extracto, contenido, autor, categoria, etiquetas, imagen_url, publicado })
    .select("id")
    .single();

  if (error) {
    const msg = error.code === "23505" ? "Ya existe un artículo con ese slug." : error.message;
    return NextResponse.json({ error: msg }, { status: 500 });
  }
  return NextResponse.json({ ok: true, id: data.id }, { status: 201 });
}
