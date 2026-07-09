export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "neuroplasticidad-mejora-tu-eficiencia-mental",
    title: "Neuroplasticidad: mejora tu eficiencia mental",
    author: "Clínica Ser Humano",
    date: "julio 04, 2026",
    category: "Sistema Nervioso",
    excerpt:
      "Una de las mejores armas que posee ser humano es la capacidad de cambio que tiene el Sistema Nervioso Central en respuesta a diferentes lesiones, modificaciones del entorno y demandas fisiológicas. La principal responsable: La Neuroplasticidad.",
    image: "/fotos/collage-vr-sara.jpg",
    tags: ["neuroplasticidad"],
    content: `
<p>Una de las mejores armas que posee ser humano es la capacidad de cambio que tiene el Sistema Nervioso Central en respuesta a diferentes lesiones, modificaciones del entorno y demandas fisiológicas. La principal responsable: La Neuroplasticidad.</p>

<p>El artículo pretende hacer una breve reseña sobre el concepto de Neuroplasticidad y ofrecer al lector las múltiples capacidades que nos otorga. Pasaremos desde una breve descripción sobre este término, terminando sobre aquellos descubrimientos más relevantes que se han divulgado.</p>

<p>Básicamente podríamos entender a la Neuroplasticidad como a una ingeniera de caminos. Se encarga de diseñar el proyecto y establecer la mejor y mayor conectividad entre las diferentes funciones de nuestro organismo. Para ello, necesita de carreteras (sistema nervioso) para poder establecer esas conexiones. Los cambios estructurales del cerebro como consecuencia del aprendizaje se han demostrado consistentemente a largo plazo utilizando métodos de neuroimagen no invasivos.</p>

<p>Como toda carretera, a veces se puede deteriorar (lesión), pero también pueden sufrir reformas: nuevos y mejores caminos a los ya construidos. Esto se consigue a través de nuestra interacción con el entorno, del cual aprendemos y nos permite vivenciar experiencias de maneras diferentes, independientemente de que sean buenas o malas.</p>

<p>Según esto, según el tipo de estímulo que reciba, genera una respuesta que será interpretada de manera única en cada uno de nosotros, de manera que ese nuevo camino creado puede que no sea en nuestro beneficio. Es lo que se conoce como <strong>Neuroplasticidad Maladaptativa</strong> (el lado oscuro de la Neuroplasticidad). Básicamente se traduce en cómo también podemos aprender cosas no tan buenas, de manera que esos nuevos caminos que se han creado no resulten del todo aconsejables a tomar.</p>

<h2>A mayor edad, ¿pierdo capacidad para aprender?</h2>

<p>Quizás sea una idea que a más de uno le sigue generando preocupación. Sin embargo, incluso aun en estas circunstancias, existe solución. Independientemente de nuestra edad, a través de la plasticidad, las neuronas de la corteza cerebral, ampliamente conectadas entre sí, también refuerzan sus conexiones con sus vecinas más cercanas. Cuando el cerebro se involucra de manera participativa, las entradas que se activan casi simultáneamente en el tiempo se fortalecen juntas, aumentando su cooperatividad para generar respuestas más potentes y más fiables.</p>

<p>Ese crecimiento impulsado por la plasticidad en el «trabajo en equipo» local es un aspecto crítico de la mejora en el procesamiento selectivo y especializado de la información que apoya cualquier avance basado en el aprendizaje.</p>

<p>Se ha demostrado que los mecanismos de sueño posteriores al aprendizaje desempeñan un papel importante en la consolidación de la memoria y promueven cambios duraderos en las redes neuronales.</p>

<p>Se demostró que el sueño contribuye a las modificaciones estructurales durante semanas de entrenamiento prolongado. Por otro lado, los estudios en animales muestran de manera convincente cómo el sueño podría modular la microestructura sináptica.</p>

<p>Los estudios de neuroimagen funcional en humanos han proporcionado pruebas de que la actividad neural durante el sueño puede ser modulada por la experiencia/aprendizaje previo y contribuir a la consolidación de las huellas de memoria recientemente adquiridas.</p>

<p>Los estudios en animales, por su parte, proporcionaron resultados para explicar cómo el sueño podría modular las estructuras sinápticas, afectando no sólo a la morfología, sino también a los astrocitos y al grosor de la mielina.</p>

<p>El tiempo transcurrido y la calidad/cantidad del sueño parecen ser factores moduladores a tener en cuenta en este caso. De hecho, se descubrió que la restricción crónica del sueño durante 4,5 días (frente al sueño regular) provocaba el adelgazamiento de las vainas de mielina, mientras que la deprivación del sueño aguda (es decir, de 6 a 8 horas) no difería significativamente tanto de la restricción crónica del sueño como del sueño regular.</p>

<h2>¿Cómo podemos potenciarlo?</h2>

<p>En definitiva, según hemos podido comprobar el Ejercicio Físico, la exposición a un entorno enriquecido, la dieta y nuestra calidad de descanso, actúan a través de modificaciones complejas de las células microgliales, que cambian su fenotipo y su actividad funcional traduciendo así los eventos del estilo de vida en la remodelación de la homeostasis cerebral (equilibrio) y la remodelación de las redes neuronales, mejorando en última instancia la neuroprotección y la longevidad cognitiva.</p>
    `.trim(),
  },
  {
    slug: "que-es-la-neuromodulacion-no-invasiva",
    title: "¿Qué es la neuromodulación no invasiva?",
    author: "Dra. Sara Ochoa",
    date: "julio 08, 2026",
    category: "Neuromodulación",
    excerpt:
      "¿Te has preguntado cuánta actividad hay en tu cuerpo sin que tú seas consciente de ello? Te hablamos del sistema nervioso autónomo y cómo la neuromodulación no invasiva puede mejorar tu salud.",
    image: "/fotos/neuroni-hero.png",
    tags: ["neuromodulación", "sistema nervioso", "neurotransmisores", "salud integral"],
    content: `
<p>¿Te has preguntado cuánta actividad hay en tu cuerpo sin que tú seas consciente de ello? Hay tanta, que aquí somos incapaces de poder enumerarte todo. Pero te hablaremos de algunas relacionadas con el sistema nervioso autónomo y un concepto llamado <strong>neuromodulación no invasiva</strong>.</p>

<p>Antes de continuar, te pediremos un pequeño ejercicio: aguanta la respiración, todo el tiempo que puedas. Intenta no respirar, aunque sientas que te falte el aire.</p>

<p>Te haremos spoiler: el cuerpo te "obligará" a que respires. ¿Eres consciente de respirar? ¿Haces algún esfuerzo para mantener la respiración activa durante tu día a día?</p>

<p>Veamos otro ejemplo: cuando sufres una herida, da igual si es pequeña o de gravedad, el cuerpo por sí mismo comienza a repararse: las plaquetas forman un coágulo para aliviar la hemorragia y se comienzan a regenerar la piel, las venas, a sellar el hueso fracturado, la uña que se cayó con el golpe crece de nuevo. Todo sin que tú sientas nada, sin esfuerzo. Es fruto del <strong>sistema nervioso autónomo</strong>.</p>

<h2>El sistema nervioso autónomo</h2>

<p>El sistema nervioso autónomo es un conjunto de células que envían y reciben señales bioeléctricas por todo el cuerpo. Es el responsable de todas las actividades internas que tu cuerpo realiza sin que tú te enteres: respirar, combatir el dolor, reconstruir células, la temperatura corporal, la presión arterial, el ritmo cardíaco, el metabolismo, los niveles de glucosa en sangre, la digestión, y un enorme etcétera.</p>

<p>Imagina por un momento hacer ejercicio y tener que acelerar tu corazón de forma consciente cada vez que lo necesites, o que se te olvide respirar. Suena irreal, pero esas cosas no las necesitamos hacer porque para eso tenemos el sistema nervioso autónomo. Como puedes concluir: <strong>si tu sistema nervioso autónomo está en buenas condiciones, tu salud en general lo estará</strong>.</p>

<h2>Cómo funciona el sistema nervioso autónomo</h2>

<p>Recibe información del entorno y de distintos órganos del cuerpo, enviando señales a través de señales bioeléctricas. Se compone de dos partes, independientes y dependientes entre sí:</p>

<p><strong>Sistema nervioso simpático (SNS):</strong> es la parte que estimula como reacción al entorno. <strong>Sistema nervioso parasimpático (SNP):</strong> controla las funciones cuando estamos en reposo.</p>

<p>Ejemplo: vas caminando con tu perro al parque. De repente viene corriendo hacia ti un perro grande a toda velocidad. De forma casi instintiva, tomas a tu perro en brazos, corres y te subes a una banca. Cuando te relajas, no sabes cómo hiciste todo eso. Eso fue tu sistema nervioso simpático en acción.</p>

<h2>El sistema nervioso autónomo y su papel en la salud en general</h2>

<p>Mantenerlo sano y en óptimo estado es clave para nuestra calidad de vida. ¿Qué pasa si esa sincronía se rompe? Lo sufre todo tu cuerpo. Se llama <strong>disautonomía</strong>, y puede manifestarse como parálisis, hipotensión ortostática, atrofia multisistémica, entre otras condiciones.</p>

<h2>¿Qué es la neuromodulación no invasiva y cómo ayuda?</h2>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;margin:2rem 0">
  <iframe
    src="https://www.youtube.com/embed/84MPCL1VxQQ"
    title="Qué es la neuromodulación no invasiva"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

<p>El sistema nervioso se comunica a través de lo que conocemos como <strong>neurotransmisores</strong>. Las neuronas son las que "toman las decisiones" en nuestro cerebro, pero no se tocan entre sí: hay un espacio entre ellas llamado sinapsis. Para hacer llegar la información entre las neuronas se utilizan "mensajeros" llamados neurotransmisores.</p>

<p>Un neurotransmisor es el mensajero que recoge, transporta, equilibra y entrega las señales entre una neurona y una célula. La velocidad es enorme: dependiendo del diámetro del neurotransmisor, puede oscilar entre 1 y 4 metros por segundo.</p>

<p>Hay tres tipos de neurotransmisores:</p>

<p><strong>Excitadores:</strong> aumentan la actividad o la acción (como la epinefrina). <strong>Inhibidores:</strong> disminuyen la actividad (como la serotonina). <strong>Moduladores:</strong> buscan el equilibrio de la actividad.</p>

<p>Millones de millones de neurotransmisores trabajan de forma simultánea, constante y coordinada para mantener nuestro sistema nervioso en funcionamiento pleno, controlando todo: la respiración, latidos del corazón, niveles de concentración, estados de ánimo, etc.</p>

<p>Cuando un neurotransmisor completa su trabajo, su labor termina por medio de tres mecanismos: <strong>degradación</strong> (una enzima cambia su estructura), <strong>difusión</strong> (es enviado a otro sitio) o <strong>recaptación</strong> (es absorbido por la propia neurona que lo envió). Esto evita que las órdenes se ejecuten en un bucle exponencial.</p>

<h2>Resultados de la neuromodulación no invasiva</h2>

<p>Debes tener claro que la neuromodulación no invasiva es un tratamiento que brinda resultados <strong>duraderos, estables y sostenibles, pero a mediano plazo</strong>. No encontrarás resultados inmediatos.</p>

<p>Cuanto mayor sea el daño, el dolor o la gravedad de la lesión, más sesiones necesitarás para comenzar a ver resultados. Como mínimo se necesitarán de <strong>8 a 10 sesiones</strong>, y el profesional de la salud es el único que puede decirte el máximo o mínimo según tu historial clínico.</p>

<p>Si tienes alguna duda sobre si la neuromodulación no invasiva puede ayudarte a mejorar tu calidad de vida, escríbenos — con gusto te atenderemos en Clínica Ser Humano.</p>
    `.trim(),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? BLOG_POSTS[idx - 1] : null,
    next: idx < BLOG_POSTS.length - 1 ? BLOG_POSTS[idx + 1] : null,
  };
}
