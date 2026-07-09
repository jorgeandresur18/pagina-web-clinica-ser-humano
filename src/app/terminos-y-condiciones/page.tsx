import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Términos y Condiciones | Clínica Ser Humano",
  description:
    "Condiciones de uso del sitio web de Fundación Ser Humano SERUNO. Información sobre el alcance de los contenidos, propiedad intelectual y limitaciones de responsabilidad.",
  path: "/terminos-y-condiciones",
});

const SECCIONES = [
  {
    id: "objeto",
    titulo: "1. Objeto y aceptación",
    contenido: `
      <p>Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>clinicaserhumano.ec</strong> (en adelante, "el Sitio"), titularidad de <strong>Fundación Ser Humano SERUNO</strong> (RUC 0992550848001), con domicilio en Guayaquil, Ecuador.</p>
      <p>El acceso y navegación por el Sitio implican la aceptación plena y sin reservas de estos Términos. Si no estás de acuerdo con alguna de las condiciones aquí establecidas, debes abstenerte de utilizar el Sitio.</p>
    `,
  },
  {
    id: "servicios",
    titulo: "2. Descripción del sitio",
    contenido: `
      <p>El Sitio tiene carácter informativo y permite a los usuarios:</p>
      <ul>
        <li>Conocer los servicios clínicos de Fundación Ser Humano SERUNO y sus programas especializados (Neuroni, Neurolab, Nadia Donadonibus, Programa Ser).</li>
        <li>Acceder a contenidos educativos sobre salud mental, bienestar y neurociencia.</li>
        <li>Solicitar información o agendar citas mediante el formulario de contacto o WhatsApp.</li>
      </ul>
      <p>El Sitio <strong>no constituye un servicio de telemedicina</strong> ni reemplaza la consulta médica presencial.</p>
    `,
  },
  {
    id: "informacion-medica",
    titulo: "3. Información médica y de salud",
    contenido: `
      <p>Los contenidos publicados en el Sitio (artículos, descripciones de servicios, materiales educativos) tienen finalidad <strong>exclusivamente informativa y divulgativa</strong>. En ningún caso:</p>
      <ul>
        <li>Constituyen diagnóstico, tratamiento ni recomendación médica personalizada.</li>
        <li>Sustituyen la evaluación clínica por parte de un profesional de la salud calificado.</li>
        <li>Deben ser utilizados como base para tomar decisiones médicas sin consulta previa.</li>
      </ul>
      <p>Ante cualquier duda sobre tu salud, consulta directamente con un profesional. En caso de emergencia, contacta los servicios de emergencias locales o dirígete al centro de salud más cercano.</p>
    `,
  },
  {
    id: "propiedad-intelectual",
    titulo: "4. Propiedad intelectual",
    contenido: `
      <p>Todos los contenidos del Sitio —incluyendo textos, imágenes, logotipos, marcas, diseño gráfico, código fuente y estructura— son propiedad de <strong>Fundación Ser Humano SERUNO</strong> o de sus licenciantes, y están protegidos por la legislación ecuatoriana de propiedad intelectual.</p>
      <p>Queda expresamente prohibido:</p>
      <ul>
        <li>Reproducir, distribuir o comunicar públicamente cualquier contenido sin autorización escrita previa.</li>
        <li>Utilizar los logotipos o marcas de la Fundación o sus programas (Neuroni, Neurolab, Nadia Donadonibus, Programa Ser) sin autorización expresa.</li>
        <li>Realizar ingeniería inversa o extracción masiva de contenidos del Sitio.</li>
      </ul>
    `,
  },
  {
    id: "uso-correcto",
    titulo: "5. Uso correcto del sitio",
    contenido: `
      <p>El usuario se compromete a utilizar el Sitio de conformidad con la ley y con estos Términos, y en particular a no:</p>
      <ul>
        <li>Realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
        <li>Difundir contenidos falsos, difamatorios o que atenten contra la dignidad de personas.</li>
        <li>Intentar acceder de forma no autorizada a sistemas o bases de datos del Sitio.</li>
        <li>Introducir virus, malware o cualquier código dañino.</li>
        <li>Enviar comunicaciones no solicitadas (spam) a través de los formularios del Sitio.</li>
      </ul>
    `,
  },
  {
    id: "formulario",
    titulo: "6. Formulario de contacto y citas",
    contenido: `
      <p>El formulario de contacto del Sitio permite enviar consultas e iniciar el proceso de agendamiento de citas. El envío del formulario no garantiza por sí solo la confirmación de una cita; la Fundación se comunicará con el usuario para confirmar disponibilidad y horario.</p>
      <p>Los datos proporcionados se tratarán conforme a nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.</p>
    `,
  },
  {
    id: "cookies",
    titulo: "7. Cookies y tecnologías de seguimiento",
    contenido: `
      <p>El Sitio utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar estadísticas de uso anónimas. Consulta nuestra <a href="/politica-de-privacidad#cookies">Política de Privacidad</a> para conocer el detalle de las cookies utilizadas y cómo gestionarlas.</p>
    `,
  },
  {
    id: "responsabilidad",
    titulo: "8. Limitación de responsabilidad",
    contenido: `
      <p>Fundación Ser Humano SERUNO no será responsable de:</p>
      <ul>
        <li>Daños derivados del uso o imposibilidad de uso del Sitio por causas ajenas a su control (fallos de conexión, interrupciones técnicas, etc.).</li>
        <li>La exactitud o vigencia de la información proporcionada por terceros o enlazada desde el Sitio.</li>
        <li>Decisiones tomadas por el usuario basándose exclusivamente en los contenidos informativos del Sitio sin consulta profesional previa.</li>
      </ul>
      <p>La Fundación realizará sus mejores esfuerzos para mantener el Sitio disponible y actualizado, pero no garantiza su disponibilidad ininterrumpida.</p>
    `,
  },
  {
    id: "enlaces",
    titulo: "9. Enlaces a terceros",
    contenido: `
      <p>El Sitio puede contener enlaces a sitios web de terceros (redes sociales, proveedores de servicios, etc.). Fundación Ser Humano SERUNO no controla ni se responsabiliza del contenido, políticas de privacidad ni funcionamiento de dichos sitios. El acceso a enlaces externos es responsabilidad exclusiva del usuario.</p>
    `,
  },
  {
    id: "modificaciones",
    titulo: "10. Modificaciones",
    contenido: `
      <p>Fundación Ser Humano SERUNO se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones, el diseño y los contenidos del Sitio, sin necesidad de previo aviso.</p>
      <p>Los cambios entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de los nuevos términos.</p>
    `,
  },
  {
    id: "ley-aplicable",
    titulo: "11. Ley aplicable y jurisdicción",
    contenido: `
      <p>Estos Términos y Condiciones se rigen por las leyes de la <strong>República del Ecuador</strong>. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de <strong>Guayaquil, Ecuador</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
    `,
  },
  {
    id: "contacto",
    titulo: "12. Contacto",
    contenido: `
      <p>Para cualquier consulta sobre estos Términos y Condiciones:</p>
      <ul>
        <li><strong>Correo:</strong> recepcion@serhumano.org</li>
        <li><strong>Teléfono / WhatsApp:</strong> +593 969 520 111</li>
        <li><strong>Domicilio:</strong> Guayaquil, Ecuador</li>
      </ul>
    `,
  },
];

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-brand-base">
      {/* Header */}
      <div className="bg-brand-gray-dark">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Términos y<br />Condiciones
          </h1>
          <p className="mt-4 text-white/75">
            Última actualización: julio 2026
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white border-b border-brand-gray-light/30">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-brand-gray-dark/80 leading-relaxed">
            Al acceder y navegar por el sitio web de{" "}
            <strong className="text-brand-gray-dark">Fundación Ser Humano SERUNO</strong>{" "}
            (RUC 0992550848001), aceptas las condiciones de uso descritas a continuación.
            Te recomendamos leerlas junto a nuestra{" "}
            <a href="/politica-de-privacidad" className="text-brand-orange underline hover:text-brand-orange/80">
              Política de Privacidad
            </a>.
          </p>
        </div>
      </div>

      {/* Índice + Contenido */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">

          {/* Índice sticky (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-gray-dark/50">
                Contenido
              </p>
              <nav className="flex flex-col gap-1">
                {SECCIONES.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-lg px-3 py-1.5 text-xs text-brand-gray-dark/70 transition-colors hover:bg-brand-orange/10 hover:text-brand-orange"
                  >
                    {s.titulo}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Secciones */}
          <main className="flex flex-col gap-10">
            {SECCIONES.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-6 rounded-2xl bg-white p-7 shadow-sm"
              >
                <h2 className="mb-4 text-lg font-black text-brand-gray-dark border-b border-brand-gray-light/40 pb-3">
                  {s.titulo}
                </h2>
                <div
                  className="prose-custom text-sm leading-relaxed text-brand-gray-dark/80"
                  dangerouslySetInnerHTML={{ __html: s.contenido }}
                />
              </section>
            ))}

            <p className="text-center text-xs text-brand-gray-dark/40 pb-4">
              © 2026 Fundación Ser Humano SERUNO · RUC 0992550848001 · Guayaquil, Ecuador
            </p>
          </main>

        </div>
      </div>
    </div>
  );
}
