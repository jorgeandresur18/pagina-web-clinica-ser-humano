"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import LinkExt from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";

type Props = { content?: string; onChange: (html: string) => void };

function TbBtn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={[
        "flex h-7 w-7 items-center justify-center rounded-md text-[12px] font-bold transition",
        active
          ? "bg-[#ff6b12]/10 text-[#ff6b12]"
          : "text-gray-400 hover:bg-gray-100 hover:text-gray-700",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <div className="mx-1 h-5 w-px flex-shrink-0 bg-gray-200" />;
}

export default function RichEditor({ content = "", onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      LinkExt.configure({ openOnClick: false }),
      ImageExt,
      Placeholder.configure({ placeholder: "Empieza a escribir el contenido del artículo…" }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[420px] px-8 py-6 focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("URL del enlace:");
    if (!url) { editor.chain().focus().unsetLink().run(); return; }
    editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("URL de la imagen:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  if (!editor) return null;

  const h = editor.isActive("heading", { level: 2 })
    ? "h2"
    : editor.isActive("heading", { level: 3 })
    ? "h3"
    : "p";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50/70 px-3 py-2">

        {/* Historial */}
        <TbBtn title="Deshacer (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5">
            <path d="M3 7v6h6"/><path d="M3 13A9 9 0 1 0 5.7 6.7"/>
          </svg>
        </TbBtn>
        <TbBtn title="Rehacer (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5">
            <path d="M21 7v6h-6"/><path d="M21 13A9 9 0 1 1 18.3 6.7"/>
          </svg>
        </TbBtn>

        <Sep />

        {/* Párrafo */}
        <select
          value={h}
          onChange={(e) => {
            if (e.target.value === "h2") editor.chain().focus().setHeading({ level: 2 }).run();
            else if (e.target.value === "h3") editor.chain().focus().setHeading({ level: 3 }).run();
            else editor.chain().focus().setParagraph().run();
          }}
          className="h-7 rounded-md border border-gray-200 bg-white px-2 text-[11px] font-semibold text-gray-600 focus:border-[#ff6b12] focus:outline-none"
        >
          <option value="p">Párrafo</option>
          <option value="h2">Título 2</option>
          <option value="h3">Título 3</option>
        </select>

        <Sep />

        {/* Formato */}
        <TbBtn title="Negrita (Ctrl+B)" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <strong>B</strong>
        </TbBtn>
        <TbBtn title="Cursiva (Ctrl+I)" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <em>I</em>
        </TbBtn>
        <TbBtn title="Subrayado (Ctrl+U)" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <u>U</u>
        </TbBtn>
        <TbBtn title="Tachado" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <s>S</s>
        </TbBtn>
        <TbBtn title="Código en línea" active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()}>
          <span className="font-mono text-[11px]">`c`</span>
        </TbBtn>

        <Sep />

        {/* Listas */}
        <TbBtn title="Lista con viñetas" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/>
            <circle cx="4" cy="6" r="1.2" fill="currentColor"/><circle cx="4" cy="12" r="1.2" fill="currentColor"/><circle cx="4" cy="18" r="1.2" fill="currentColor"/>
          </svg>
        </TbBtn>
        <TbBtn title="Lista numerada" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/>
            <path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>
          </svg>
        </TbBtn>

        <Sep />

        {/* Alineación */}
        <TbBtn title="Izquierda" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/>
          </svg>
        </TbBtn>
        <TbBtn title="Centrado" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
          </svg>
        </TbBtn>
        <TbBtn title="Derecha" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="21" y2="18"/>
          </svg>
        </TbBtn>

        <Sep />

        {/* Insertar */}
        <TbBtn title="Enlace (Ctrl+K)" active={editor.isActive("link")} onClick={setLink}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </TbBtn>
        <TbBtn title="Imagen" onClick={addImage}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
        </TbBtn>
        <TbBtn title="Cita" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
        </TbBtn>
        <TbBtn title="Bloque de código" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/>
          </svg>
        </TbBtn>
        <TbBtn title="Línea divisoria" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <line x1="3" y1="12" x2="21" y2="12"/>
          </svg>
        </TbBtn>
      </div>

      {/* Área de escritura */}
      <EditorContent editor={editor} />
    </div>
  );
}
