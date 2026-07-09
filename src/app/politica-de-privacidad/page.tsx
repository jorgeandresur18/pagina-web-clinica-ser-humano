import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Política de Privacidad | Clínica Ser Humano",
  description: "Conoce cómo Clínica Ser Humano recopila, usa y protege tus datos personales conforme a la Ley Orgánica de Protección de Datos de Ecuador.",
  path: "/politica-de-privacidad",
});

const SECCIONES = [
  {
    id: "responsable",
    titulo: "1. Responsable del tratamiento",
    contenido: `
      <p>El responsable del tratamiento de tus datos personales es:</p>
      <ul>
        <li><strong>Razón social:</strong> Fundación Ser Humano SERUNO</li>
        <li><strong>RUC:</strong> 0992550848001</li>
        <li><strong>Domicilio:</strong> Guayaquil, Ecuador</li>
        <li><strong>Correo de contacto:</strong> recepcion@serhumano.org</li>
        <li><strong>Teléfono:</strong> +593 969 520 111</li>
        <li><strong>Sitio web:</strong> clinicaserhumano.ec</li>
      </ul>
    `,
  },
  {
    id: "datos",
    titulo: "2. Datos que recopilamos",
    contenido: `
      <p>Recopilamos los siguientes datos personales a través de nuestro sitio web:</p>
      <h3>2.1 Formulario de contacto</h3>
      <ul>
        <li>Nombre completo</li>
        <li>Número de teléfono (con código de país)</li>
        <li>Mensaje o consulta</li>
      </ul>
      <h3>2.2 Datos de navegación (cookies y analíticas)</h3>
      <ul>
        <li>Dirección IP (anonimizada)</li>
        <li>Tipo de dispositivo y navegador</li>
        <li>Páginas visitadas y tiempo de permanencia</li>
        <li>Fuente de tráfico (buscadores, redes sociales, acceso directo)</li>
        <li>Interacciones generales con el sitio</li>
      </ul>
      <h3>2.3 Chatbot de admisión (Zolutium)</h3>
      <ul>
        <li>Nombre</li>
        <li>Número de teléfono</li>
        <li>Correo electrónico (si el usuario lo proporciona)</li>
        <li>Ciudad</li>
        <li>Motivo general de consulta</li>
        <li>Historial de la conversación</li>
      </ul>
      <p>Estos datos son recopilados a través del asistente de admisión Zolutium, integrado en el sitio con la finalidad de orientar al usuario hacia el servicio más adecuado a sus necesidades.</p>
      <p>Los datos de navegación se recopilan a través de <strong>Google Tag Manager</strong> y <strong>Google Analytics 4</strong>. No recopilamos datos de salud, financieros ni datos sensibles a través del sitio web.</p>
    `,
  },
  {
    id: "finalidad",
    titulo: "3. Finalidad del tratamiento",
    contenido: `
      <p>Tratamos tus datos personales para las siguientes finalidades:</p>
      <ul>
        <li><strong>Atender tu consulta:</strong> Los datos del formulario de contacto se utilizan exclusivamente para responder a tu solicitud de información o cita médica.</li>
        <li><strong>Mejorar el sitio web:</strong> Los datos de navegación anónimos nos permiten entender cómo se usa el sitio y mejorar la experiencia del usuario.</li>
        <li><strong>Analítica web:</strong> Medición del tráfico y comportamiento en el sitio mediante Google Analytics 4 con fines estadísticos internos.</li>
      </ul>
    `,
  },
  {
    id: "base-legal",
    titulo: "4. Base legal del tratamiento",
    contenido: `
      <p>El tratamiento de tus datos se realiza bajo las siguientes bases legales, conforme a la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP)</strong>:</p>
      <ul>
        <li><strong>Consentimiento:</strong> Al completar y enviar el formulario de contacto, otorgas tu consentimiento expreso para el tratamiento de tus datos con el fin de atender tu solicitud.</li>
        <li><strong>Interés legítimo:</strong> El análisis anónimo del tráfico web nos permite mejorar nuestros servicios digitales.</li>
      </ul>
    `,
  },
  {
    id: "cookies",
    titulo: "5. Uso de cookies y tecnologías de seguimiento",
    contenido: `
      <p>Nuestro sitio utiliza las siguientes tecnologías de seguimiento, que solo se activan tras tu consentimiento expreso a través del banner de cookies:</p>
      <h3>Google Tag Manager (GTM-PVFCTMQ6)</h3>
      <p>Gestiona la carga de etiquetas de análisis y marketing. Por sí solo no recopila datos personales, pero puede cargar herramientas que sí lo hacen.</p>
      <h3>Google Analytics 4 (G-MCYWCPF760)</h3>
      <p>Recopila datos de comportamiento de navegación de forma anónima para generar estadísticas de uso del sitio. Las IPs se anonimizan automáticamente. Google puede transferir estos datos a sus servidores en Estados Unidos conforme a las salvaguardas establecidas en los <a href="https://business.safety.google/adsprocessorterms/" target="_blank" rel="noopener noreferrer">Términos de Procesamiento de Datos de Google</a>.</p>
      <p>Puedes desactivar el seguimiento de Google Analytics instalando el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de inhabilitación de Google Analytics</a> para tu navegador.</p>
      <h3>Tabla de cookies</h3>
      <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px">
        <thead>
          <tr style="background:#f5f5f3;text-align:left">
            <th style="padding:8px 10px;border:1px solid #e2e2de">Cookie</th>
            <th style="padding:8px 10px;border:1px solid #e2e2de">Proveedor</th>
            <th style="padding:8px 10px;border:1px solid #e2e2de">Finalidad</th>
            <th style="padding:8px 10px;border:1px solid #e2e2de">Duración</th>
            <th style="padding:8px 10px;border:1px solid #e2e2de">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:7px 10px;border:1px solid #e2e2de"><code>sh_cookie_consent</code></td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Clínica Ser Humano</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Guarda la preferencia de cookies del usuario</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Persistente (localStorage)</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Necesaria</td>
          </tr>
          <tr>
            <td style="padding:7px 10px;border:1px solid #e2e2de"><code>_ga</code></td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Google LLC</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Distingue usuarios únicos en Google Analytics</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">2 años</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Analítica</td>
          </tr>
          <tr>
            <td style="padding:7px 10px;border:1px solid #e2e2de"><code>_ga_MCYWCPF760</code></td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Google LLC</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Mantiene el estado de sesión en Google Analytics 4</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">2 años</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Analítica</td>
          </tr>
          <tr>
            <td style="padding:7px 10px;border:1px solid #e2e2de"><code>_gcl_au</code></td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Google LLC</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Conversiones de anuncios de Google (si activo en GTM)</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">3 meses</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Analítica / Publicidad</td>
          </tr>
          <tr>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Cookies de Zolutium</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Fortuniem Holding Group LLC</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Guarda la sesión del chatbot y datos ingresados para reutilizarlos</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Persistente</td>
            <td style="padding:7px 10px;border:1px solid #e2e2de">Funcional</td>
          </tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "conservacion",
    titulo: "6. Conservación de los datos",
    contenido: `
      <ul>
        <li><strong>Formulario de contacto:</strong> Los datos se conservan durante el tiempo necesario para atender tu solicitud y, en caso de establecerse una relación clínica, conforme a los plazos legales aplicables en Ecuador para la conservación de historias clínicas.</li>
        <li><strong>Datos de analítica:</strong> Google Analytics 4 conserva los datos de eventos durante 14 meses por defecto. Los datos agregados y anónimos pueden conservarse indefinidamente.</li>
      </ul>
    `,
  },
  {
    id: "derechos",
    titulo: "7. Tus derechos (LOPDP)",
    contenido: `
      <p>Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador, tienes los siguientes derechos sobre tus datos:</p>
      <ul>
        <li><strong>Acceso:</strong> Conocer qué datos tuyos tratamos y obtener una copia.</li>
        <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
        <li><strong>Eliminación:</strong> Solicitar la supresión de tus datos cuando ya no sean necesarios o retires el consentimiento.</li>
        <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
        <li><strong>Limitación:</strong> Solicitar que restrinjamos el tratamiento de tus datos.</li>
        <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado, de uso común y legible por máquina.</li>
        <li><strong>Suspensión del tratamiento:</strong> Pedir que pausemos el uso de tus datos mientras se resuelve una disputa.</li>
      </ul>
      <h3>Cómo ejercer tus derechos</h3>
      <p>Envía un correo a <strong>recepcion@serhumano.org</strong> con el asunto <em>"Solicitud de derechos LOPDP"</em> e incluye:</p>
      <ul>
        <li>Tu nombre completo.</li>
        <li>Una copia de tu cédula de identidad o pasaporte (para verificar tu identidad).</li>
        <li>Descripción clara del derecho que deseas ejercer y los datos afectados.</li>
      </ul>
      <p>Atenderemos tu solicitud en un plazo máximo de <strong>15 días hábiles</strong> contados desde su recepción. Si la solicitud es compleja, podremos ampliar ese plazo otros 15 días hábiles adicionales, informándote del motivo.</p>
      <p>Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la <strong>Autoridad de Protección de Datos Personales del Ecuador (ADP)</strong>.</p>
    `,
  },
  {
    id: "terceros",
    titulo: "8. Transferencia a terceros",
    contenido: `
      <p>No vendemos ni cedemos tus datos personales a terceros con fines comerciales. Únicamente compartimos datos con los siguientes proveedores que actúan como encargados del tratamiento:</p>
      <ul>
        <li><strong>Google LLC (EE.UU.):</strong> A través de Google Analytics 4 (G-MCYWCPF760) y Google Tag Manager (GTM-PVFCTMQ6), para análisis anónimo del tráfico web. Solo se activa con tu consentimiento previo.</li>
        <li><strong>Google Workspace / Gmail (EE.UU.):</strong> Los mensajes enviados a través del formulario de contacto se reciben en recepcion@serhumano.org, gestionada mediante Google Workspace. Google procesa estos correos en sus servidores bajo los <a href="https://workspace.google.com/terms/dpa_terms.html" target="_blank" rel="noopener noreferrer">Términos de Procesamiento de Datos de Google Workspace</a>.</li>
        <li><strong>Vercel Inc. (EE.UU.):</strong> Proveedor de alojamiento del sitio web. Procesa datos técnicos de acceso (IP, cabeceras HTTP) para servir el sitio.</li>
        <li><strong>Zolutium — Fortuniem Holding Group LLC (EE.UU.):</strong> Asistente de admisión integrado en el sitio web. Puede recopilar nombre, teléfono, correo, ciudad y contenido de la conversación. Zolutium opera bajo la ley del Estado de Nuevo México, EE.UU., y puede compartir datos con sus subcontratistas de soporte, entre los que se incluyen Meta, WhatsApp, TikTok, Stripe, Twilio y Google. Los datos de conversación no se utilizan para entrenar modelos de IA; el asistente se entrena exclusivamente con la base de conocimiento configurada por la clínica. Para más información: <a href="https://zolutium.com" target="_blank" rel="noopener noreferrer">zolutium.com</a>.</li>
        <li><strong>HighLevel / LeadConnector (EE.UU.):</strong> Widget de chat de atención al cliente integrado en el sitio. Puede recopilar datos de la conversación iniciada voluntariamente por el usuario.</li>
        <li><strong>WhatsApp / Meta Platforms (EE.UU.):</strong> Al hacer clic en el botón de WhatsApp del sitio, eres redirigido a la plataforma de Meta. El tratamiento de datos en esa plataforma se rige por las políticas de privacidad de Meta.</li>
      </ul>
      <p>Todos los proveedores anteriores operan bajo estándares internacionales de protección de datos. Las transferencias internacionales desde Ecuador se realizan bajo las salvaguardas disponibles en cada caso, incluyendo los términos de procesamiento de datos de cada proveedor.</p>
    `,
  },
  {
    id: "salud",
    titulo: "9. Datos de salud y datos sensibles",
    contenido: `
      <p>Por ser una institución de salud, Fundación Ser Humano SERUNO aplica un nivel de protección reforzado conforme a la LOPDP, que clasifica los datos relativos a la salud como <strong>datos sensibles</strong>.</p>
      <p>En relación a los datos de salud, nuestro sitio web:</p>
      <ul>
        <li><strong>No recopila diagnósticos, historias clínicas ni datos médicos</strong> a través de los formularios públicos del sitio.</li>
        <li>Solo solicita nombre, teléfono y motivo general de consulta para facilitar el primer contacto.</li>
        <li>No utiliza datos de pacientes para campañas de remarketing o publicidad dirigida.</li>
        <li>No publica testimonios con información clínica identificable sin autorización expresa del titular.</li>
      </ul>
      <p>Los datos clínicos de pacientes (historias clínicas, diagnósticos, exámenes) son gestionados por canales seguros separados del sitio web, con acceso restringido al personal autorizado y bajo las obligaciones de confidencialidad aplicables en Ecuador.</p>
    `,
  },
  {
    id: "seguridad",
    titulo: "10. Seguridad de los datos",
    contenido: `
      <p>Fundación Ser Humano SERUNO aplica medidas técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida:</p>
      <ul>
        <li><strong>Cifrado en tránsito (SSL/TLS):</strong> Toda la comunicación entre tu navegador y el sitio está cifrada mediante HTTPS.</li>
        <li><strong>Alojamiento seguro:</strong> El sitio se aloja en Vercel Inc., plataforma con certificaciones de seguridad y alta disponibilidad.</li>
        <li><strong>Acceso restringido:</strong> Solo el personal autorizado tiene acceso a los datos recibidos a través del formulario de contacto.</li>
        <li><strong>Protección contra spam:</strong> Los formularios del sitio incluyen validaciones para prevenir envíos automatizados maliciosos.</li>
        <li><strong>Anonimización de analíticas:</strong> Google Analytics 4 anonimiza las direcciones IP antes de almacenarlas.</li>
      </ul>
      <p>Sin perjuicio de lo anterior, ningún sistema de transmisión de datos por internet es 100% seguro. Te recomendamos no incluir información médica sensible en los mensajes del formulario de contacto.</p>
    `,
  },
  {
    id: "menores",
    titulo: "12. Menores de edad",
    contenido: `
      <p>Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos intencionalmente datos personales de menores. Si detectamos que hemos recibido datos de un menor sin consentimiento del representante legal, procederemos a su eliminación inmediata.</p>
    `,
  },
  {
    id: "cambios",
    titulo: "13. Cambios en esta política",
    contenido: `
      <p>Podemos actualizar esta Política de Privacidad en cualquier momento. La versión vigente siempre estará disponible en esta página con la fecha de última actualización indicada al pie. Te recomendamos revisarla periódicamente.</p>
      <p>Si los cambios son significativos, lo comunicaremos de forma visible en el sitio web.</p>
    `,
  },
  {
    id: "contacto",
    titulo: "14. Contacto y reclamaciones",
    contenido: `
      <p>Para cualquier consulta sobre esta política o el tratamiento de tus datos:</p>
      <ul>
        <li><strong>Correo:</strong> recepcion@serhumano.org</li>
        <li><strong>Teléfono:</strong> +593 969 520 111</li>
        <li><strong>WhatsApp:</strong> +593 969 520 111</li>
      </ul>
      <p>Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una reclamación ante la <strong>Autoridad de Protección de Datos Personales del Ecuador (ADP)</strong>, organismo competente en materia de protección de datos.</p>
    `,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-brand-base">
      {/* Header */}
      <div className="bg-brand-orange">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Política de<br />Privacidad
          </h1>
          <p className="mt-4 text-white/85">
            Última actualización: julio 2026
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white border-b border-brand-gray-light/30">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-brand-gray-dark/80 leading-relaxed">
            En <strong className="text-brand-gray-dark">Clínica Ser Humano</strong> respetamos
            tu privacidad y nos comprometemos a proteger tus datos personales. Esta política
            explica qué información recopilamos a través de nuestro sitio web, cómo la usamos
            y cuáles son tus derechos conforme a la{" "}
            <strong className="text-brand-gray-dark">
              Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP)
            </strong>.
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
