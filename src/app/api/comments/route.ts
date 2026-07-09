import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json([], { status: 200 });

  const { data, error } = await supabase
    .from("comments")
    .select("id, nombre, comentario, creado_en")
    .eq("slug", slug)
    .eq("aprobado", true)
    .order("creado_en", { ascending: true });

  if (error) return NextResponse.json([], { status: 200 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, nombre, comentario } = body;

  if (!slug || !nombre?.trim() || !comentario?.trim()) {
    return NextResponse.json({ error: "Campos incompletos." }, { status: 400 });
  }

  const { error } = await supabase.from("comments").insert({
    slug,
    nombre: nombre.trim(),
    comentario: comentario.trim(),
    aprobado: false,
  });

  if (error) return NextResponse.json({ error: "Error al guardar." }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
