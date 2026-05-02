import React, { useMemo, useState, useEffect } from "react";

function Loader({ onLoaded }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFading(true), 2000);
    const timer2 = setTimeout(() => onLoaded(), 3000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onLoaded]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F4EFE7] transition-opacity duration-1000 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="relative h-40 w-40 animate-[spin_8s_linear_infinite] rounded-full p-2 opacity-80 mix-blend-multiply" style={{ filter: "url(#ink-filter)" }}>
         <svg viewBox="0 0 100 100" className="h-full w-full">
           <path d="M50 0 A 50 50 0 0 1 50 100 A 25 25 0 0 0 50 50 A 25 25 0 0 1 50 0 Z" fill="#101010" />
           <circle cx="50" cy="25" r="8" fill="#F4EFE7" />
           <path d="M50 0 A 50 50 0 0 0 50 100 A 25 25 0 0 0 50 50 A 25 25 0 0 1 50 0 Z" fill="#F4EFE7" />
           <circle cx="50" cy="75" r="8" fill="#101010" />
         </svg>
      </div>
      <svg width="0" height="0" className="absolute">
        <filter id="ink-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
}

const topics = [
  {
    id: "01",
    title: "RESPIRACIÓN",
    objective: "Volver al cuerpo y al momento presente.",
    items: [
      { name: "Respiración Budista", desc: "Técnica de atención plena al aliento (ānāpānasati). La inhalación y exhalación consciente como anclaje del sistema nervioso parasimpático, cultivando presencia y ecuanimidad." },
      { name: "Respiración Taoísta", desc: "Respiración abdominal inversa (ni fu hu xi). Activa el dan tian inferior y facilita la circulación del qi a través de los meridianos, fundamento del movimiento interno en las artes marciales internas." },
      { name: "Respiración Tortuga", desc: "Técnica avanzada de respiración profunda y lenta (gui xi). Ritmo de 4 a 6 ciclos por minuto que induce estados de coherencia cardíaca y prepara el cuerpo para la meditación en movimiento." }
    ]
  },
  {
    id: "02",
    title: "CHI KUNG",
    objective: "Activación energética suave.",
    items: [
      { name: "18 Palmas de Buda", desc: "Secuencia qigong de 18 posturas que integra visualización, respiración coordinada y apertura de los meridianos principales. Originada en el monasterio de Shaolin, es práctica preparatoria del cuerpo-energía antes del tai chi." },
      { name: "Chi Kung postural", desc: "Ejercicios estáticos de enraizamiento (zhan zhuang). Desarrollan estructura ósea alineada, tensegridad muscular y sensibilidad propioceptiva como base del movimiento en el estilo Yang." },
      { name: "Apertura de meridianos", desc: "Secuencias de automasaje y movimientos suaves que desobstruyen los 12 meridianos principales según la Medicina Tradicional China, facilitando el flujo del qi antes y después de la práctica formal." }
    ]
  },
  {
    id: "03",
    title: "TAI CHI estilo yang",
    objective: "Estructura, dirección y continuidad.",
    items: [
      { name: "Forma 16", desc: "Forma corta derivada de la secuencia de 108 movimientos del estilo Yang Chengfu. Diseñada para aprendizaje progresivo, contiene los principios esenciales: peso único, columna vertical, articulaciones sueltas y energía enrollada (chan si jin)." },
      { name: "Principios del estilo Yang", desc: "Los 10 principios esenciales de Yang Chengfu: cabeza suspendida, pecho hundido, cintura relajada, distinción lleno-vacío, hombros caídos, uso de la mente sobre la fuerza, sincronía superior-inferior, continuidad del movimiento." },
      { name: "Aplicaciones marciales", desc: "Comprensión de las aplicaciones (yong) de cada postura. El tai chi como arte marcial interna: uso del jin (fuerza estructural) sobre la fuerza muscular bruta, con énfasis en escucha sensitiva (ting jin) y neutralización." }
    ]
  },
  {
    id: "04",
    title: "I CHING",
    objective: "Oráculo para la experiencia creativa.",
    items: [
      { name: "El I Ching es uno de los oráculos más antiguos de la historia de la humanidad.", desc: "Compilado en China hace más de 3.000 años, el Libro de los Cambios (Yi Jing) es la síntesis más profunda del pensamiento taoísta sobre la naturaleza de la transformación, la polaridad y el devenir." },
      { name: "Es un libro para consultar.", desc: "No como predicción determinista, sino como espejo de patrones energéticos. La consulta mediante monedas o yarrow activa la conciencia simbólica y el discernimiento intuitivo frente a situaciones complejas." },
      { name: "En este taller se consultará exclusivamente para la experiencia creativa.", desc: "Utilizaremos los 64 hexagramas como mapa de estados corporales y relacionales. Cada hexagrama corresponde a una cualidad de movimiento, tono y presencia que puede ser explorada desde la práctica somática y el tai chi." }
    ]
  }
];

const WHATSAPP_NUMBER = "59176465010";
const CONTACT_EMAIL = "raizcolectivateatro@gmail.com";

function Icon({ name = "circle", size = 20, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  switch (name) {
    case "calendar":
      return <svg {...common}><path d="M7 3v3M17 3v3M4.5 9.5h15" /><rect x="4" y="5" width="16" height="15" rx="2.5" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></svg>;
    case "laptop":
      return <svg {...common}><rect x="5" y="5" width="14" height="10" rx="1.5" /><path d="M3 19h18l-2-4H5l-2 4Z" /></svg>;
    case "chevron":
      return <svg {...common}><path d="m9 5 7 7-7 7" /></svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" /></svg>;
    case "eye":
      return <svg {...common}><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
    case "wave":
      return <svg {...common}><path d="M3 8c3 0 3 3 6 3s3-3 6-3 3 3 6 3" /><path d="M3 14c3 0 3 3 6 3s3-3 6-3 3 3 6 3" /></svg>;
    case "wind":
      return <svg {...common}><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 13h16a2.5 2.5 0 1 1-2.5 2.5" /><path d="M3 18h8" /></svg>;
    case "spark":
      return <svg {...common}><path d="M12 2.5 14.3 9l6.7 3-6.7 3L12 21.5 9.7 15 3 12l6.7-3L12 2.5Z" /></svg>;
    case "spiral":
      return <svg {...common}><path d="M12 4a8 8 0 1 1-7.3 4.7" /><path d="M12 8a4 4 0 1 1-3.6 2.2" /><path d="M12 11.5a.5.5 0 1 1-.5.5" /></svg>;
    case "hexagram":
      return <svg {...common}><path d="M5 6h14M5 10h6M13 10h6M5 14h14M5 18h6M13 18h6" /></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
  }
}

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

function createWhatsAppMessage(data) {
  const lines = [
    "Hola, quiero información sobre 16 Movimientos con Sergio Mercurio.",
    "",
    `Nombre: ${data.nombre}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Perfil escénico: ${data.perfil}`,
    `Experiencia previa: ${data.experiencia}`,
    `Mensaje: ${data.mensaje || "Sin mensaje adicional."}`,
  ];

  return encodeURIComponent(lines.join("\n"));
}

function ButtonLike({ children, href }) {
  if (href) {
    return <a className="inline-flex items-center justify-center rounded-full border border-[#A63A2B]/50 px-7 py-3 text-base font-medium text-[#A63A2B] transition hover:bg-[#A63A2B]/10" href={href}>{children}</a>;
  }

  return <a href="#inscripcion" className="rounded-full bg-[#2F5D50] px-7 py-3 text-base font-medium text-[#F4EFE7] transition hover:bg-[#23463d]">{children}</a>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-[#C8A96A]/30 shadow-xl ${className}`}>{children}</div>;
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <label className="grid gap-2 text-sm text-[#F4EFE7]/75">
      {label}
      <input name={name} type={type} value={value} onChange={onChange} required={required} className="rounded-2xl border border-[#F4EFE7]/15 bg-[#F4EFE7] px-4 py-3 text-[#101010] outline-none focus:border-[#C8A96A]" />
    </label>
  );
}

function InkFigure() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-[#C8A96A]/30 bg-[#F4EFE7]/70 p-6 shadow-2xl shadow-black/10">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "radial-gradient(#101010 0.8px, transparent 0.8px)", backgroundSize: "18px 18px" }} />
      <img src="/figure.png" alt="Figura Taichi" className="relative z-10 h-full w-full object-contain mix-blend-multiply opacity-90" />
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#C8A96A] bg-[#F4EFE7]/90 px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-[#2F5D50]">Taichi · Chikung · I Ching</div>
    </div>
  );
}

function RegistrationForm() {
  const [formData, setFormData] = useState({ nombre: "", email: "", whatsapp: "", perfil: "Actor/actriz", experiencia: "Sin experiencia previa", mensaje: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const payload = { "form-name": "taichi-sergio-mercurio-inscripcion", ...formData };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(payload),
      });

      setStatus("sent");
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${createWhatsAppMessage(formData)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setStatus("error");
    }
  };

  return (
    <section id="inscripcion" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-8 rounded-[2.5rem] border border-[#C8A96A]/30 bg-[#101010] p-6 text-[#F4EFE7] shadow-2xl md:p-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Inscripción</p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">Solicita información y reserva tu lugar</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#F4EFE7]/70">Completa el formulario para reservar tu lugar en el taller. Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
          <div className="mt-8 rounded-2xl border border-[#F4EFE7]/10 bg-[#F4EFE7]/5 p-5 text-sm leading-relaxed text-[#F4EFE7]/70"><strong className="text-[#C8A96A]">Recepción sugerida:</strong> {CONTACT_EMAIL}<br /><strong className="text-[#C8A96A]">WhatsApp:</strong> +{WHATSAPP_NUMBER}</div>
        </div>

        <form name="taichi-sergio-mercurio-inscripcion" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="grid gap-4">
          <input type="hidden" name="form-name" value="taichi-sergio-mercurio-inscripcion" />
          <p className="hidden"><label>No completar: <input name="bot-field" onChange={handleChange} /></label></p>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nombre completo" name="nombre" value={formData.nombre} onChange={handleChange} required />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            <label className="grid gap-2 text-sm text-[#F4EFE7]/75">Perfil escénico<select name="perfil" value={formData.perfil} onChange={handleChange} className="rounded-2xl border border-[#F4EFE7]/15 bg-[#F4EFE7] px-4 py-3 text-[#101010] outline-none focus:border-[#C8A96A]"><option>Actor/actriz</option><option>Bailarín/bailarina</option><option>Performer</option><option>Docente escénico</option><option>Otro perfil creativo</option></select></label>
          </div>

          <label className="grid gap-2 text-sm text-[#F4EFE7]/75">Experiencia previa en Taichi / Chikung<select name="experiencia" value={formData.experiencia} onChange={handleChange} className="rounded-2xl border border-[#F4EFE7]/15 bg-[#F4EFE7] px-4 py-3 text-[#101010] outline-none focus:border-[#C8A96A]"><option>Sin experiencia previa</option><option>Experiencia inicial</option><option>Experiencia intermedia</option><option>Experiencia avanzada</option></select></label>

          <label className="grid gap-2 text-sm text-[#F4EFE7]/75">Mensaje o consulta<textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5" className="resize-none rounded-2xl border border-[#F4EFE7]/15 bg-[#F4EFE7] px-4 py-3 text-[#101010] outline-none focus:border-[#C8A96A]" placeholder="Cuéntanos qué buscas trabajar en este taller." /></label>

          <div className="mt-2 flex flex-wrap gap-3">
            <button type="submit" disabled={status === "sending"} className="rounded-full bg-[#C8A96A] px-7 py-3 text-base font-medium text-[#101010] transition hover:bg-[#d6bb80] disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Enviando..." : "Enviar y abrir WhatsApp"}</button>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20Taichi%20con%20Sergio%20Mercurio`} className="inline-flex items-center justify-center rounded-full border border-[#F4EFE7]/30 px-7 py-3 text-base font-medium text-[#F4EFE7] transition hover:bg-[#F4EFE7]/10">Escribir por email</a>
          </div>

          {status === "sent" && <p className="text-sm text-[#C8A96A]">Registro recibido. Se abrió WhatsApp con el mensaje listo para enviar.</p>}
          {status === "error" && <p className="text-sm text-[#ffb4a8]">No se pudo enviar el formulario. Prueba nuevamente o escribe por WhatsApp/email.</p>}
        </form>
      </div>
    </section>
  );
}

function InstructorSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <div className="rounded-[2.5rem] bg-[#101010] p-8 md:p-12 text-[#F4EFE7] shadow-2xl">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
          <span className="h-px w-12 bg-[#C8A96A]" />Instructor
        </div>
        <h2 className="font-serif text-5xl md:text-6xl text-[#F4EFE7]">Sergio Mercurio</h2>
        <p className="mt-2 text-xl font-medium text-[#C8A96A] mb-10">Es instructor de TAI CHI</p>
        
        <div className="grid gap-10 md:grid-cols-[.4fr_.6fr] items-start">
          <div className="overflow-hidden rounded-[2rem] border border-[#C8A96A]/30">
            <img src="/Instructor.png" alt="Sergio Mercurio" className="h-auto w-full object-cover grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100" />
          </div>
          <div className="flex flex-col gap-8 text-[#F4EFE7]/80">
            <p className="text-lg leading-relaxed">
              Desde el año 1992 se desempeña exclusivamente en la actividad artística como escritor, actor, director de cine y teatro, titiritero, artista plástico y formador en: América, Europa y África.
              <br />
              <a href="http://www.sergiomercurio.com.ar" target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#C8A96A] underline transition hover:text-white">www.sergiomercurio.com.ar</a>
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C8A96A]">Teatro</h4>
                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                  <li>Viejos (autor, actor director) Quito. Ecuador 2007</li>
                  <li>Viejos de mi…(Autor, actor, director) San Salvador, El Salvador. 2013</li>
                  <li>Beatriz (autor, director) Con Laura Pagés. Prov. Buenos Aires. 2008</li>
                  <li>El camino de Eva (autor, director) Con Laura Pagés 2020</li>
                  <li>La compañía de Danza de Gira a China (Autor, director) Tilcara 2021</li>
                  <li>Livro-me (Autor director) Con Fabio Lins. Curitiba Brasil 2023</li>
                  <li>Siempre Guardavidas Reestreno (autor, actor, director) CABA. Argentina 2025</li>
                  <li>Descarados (Autor, Director) La Paz, Bolivia 2025</li>
                  <li>Como Se defender de vc mesmo. (Director) Sao Paolo. Brasil. 2025</li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C8A96A]">Cine</h4>
                  <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                    <li>O FILME DA RAINHA (2006) Guionista y Director</li>
                    <li>EL GARRAFA una película de futbol (2012) Guionista y Director</li>
                    <li>NOS ESTAVAMOS AI (2024) Guionista y Director</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C8A96A]">Literatura</h4>
                  <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                    <li>De Banfield a México. 3ra edición 2004</li>
                    <li>El pintor de la Bóveda de Perón 2012</li>
                    <li>Mi amigo del aire 2020</li>
                    <li>Creó el periódico Cultural EL BANFILEÑO 2011- 2017</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 p-5">
               <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C8A96A]">Premios Destacados</h4>
               <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                  <li>2006. Premio del Público espectáculo EN CAMINO. Brasil.</li>
                  <li>2008. Primer Premio Festival de cine Contra el silencio todas las voces. México.</li>
                  <li>2010. Primer premio Fiesta Nacional del teatro de Buenos Aires. Beatriz.</li>
                  <li>2023. Mejor Monólogo, Mejor Director: El Ángel de la Valija . ATI New York.</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TaichiSergioMercurioLanding() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const currentTopic = topics[active] || topics[0];

  return (
    <>
      {!loaded && <Loader onLoaded={() => setLoaded(true)} />}
      
      <main className="min-h-screen bg-[#F4EFE7] text-[#101010] transition-opacity duration-1000" style={{ backgroundImage: "linear-gradient(120deg, rgba(200,169,106,.10), transparent 30%, rgba(47,93,80,.07)), radial-gradient(circle at 80% 10%, rgba(166,58,43,.08), transparent 22%)", opacity: loaded ? 1 : 0 }}>
        
        <section className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-16">
          <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#C8A96A]/50" />
          <div className="absolute right-10 top-12 text-xs uppercase tracking-[0.45em] text-[#2F5D50]">Online · Bimestral</div>
          <div className="relative z-10 flex flex-col justify-center pt-16 opacity-100 lg:pt-0">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#2F5D50]"><span className="h-px w-14 bg-[#C8A96A]" />Con Sergio Mercurio</div>
            <h1 className="font-serif text-5xl leading-[0.9] tracking-[0.05em] md:text-6xl lg:text-7xl">16 MOVIMIENTOS<span className="mt-3 block text-3xl font-normal tracking-[0.1em] text-[#2F5D50] md:text-4xl">PARA PERMANECER</span><span className="block text-4xl tracking-[0.2em] text-[#A63A2B] md:text-5xl">QUIETO</span></h1>
            <p className="mt-6 max-w-2xl text-2xl font-serif leading-relaxed text-[#101010]/80">Para generar la detención, para limpiar el ruido interno y para favorecer la creación.</p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#2F5D50]">Para artistas escénicos, actores y bailarines</p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <Badge iconName="calendar" text="Miércoles 21:30 hs / Sábados 8:00 AM (ARG)" />
                <Badge iconName="laptop" text="ONLINE" />
                <Badge iconName="circle" text="Bimestral" />
              </div>
              <p className="text-sm font-medium text-[#A63A2B]">Comienza sábado 16 de mayo (Clase abierta 9 de mayo)</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4"><ButtonLike>Solicitar información</ButtonLike><ButtonLike href="#programa">Ver programa</ButtonLike></div>
          </div>
          <div className="relative z-10 flex items-center"><InkFigure /></div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="bg-[#101010] text-[#F4EFE7]">
              <div className="p-8 md:p-12">
                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Experiencia</p>
                <p className="text-lg leading-relaxed text-[#F4EFE7]/80">Unos años atrás me propuse correr una marathón, hacer los 42 km con un objetivo simple, llegar y seguir caminando tranquilo, volver a mi casa y descansar tranquilo. El día anterior a la prueba tuve un encuentro de Tai Chi con mi maestro que duró 5 horas. Estaba terminando el instructorado, de modo que prioricé la práctica. Fueron 5 intensas horas, donde hubo mucho trabajo de piernas. Salí contento con la práctica y con la certeza que al otro día no iba a lograrlo. pero no fue así. Lo hice.</p>
                <div className="my-8 h-px bg-[#C8A96A]/30" />
                <p className="text-lg leading-relaxed text-[#F4EFE7]/80">El día después de la marathón volví a la practica de Tai chi. Estaba dolorido, pero esa vez no pude lograrlo. Eso pasó hace casi dos años.</p>
              </div>
            </Card>
            <Card className="bg-[#F4EFE7]/80">
              <div className="p-8 md:p-12">
                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#2F5D50]">Respirar y Estar</p>
                <p className="text-lg leading-relaxed text-[#101010]/78">En una de las clases que tuve con el maestro dijo una frase que me movilizó mucho. <strong className="text-[#101010]">Lo único que podemos cambiar en nuestra vida es la forma que respiramos.</strong></p>
                <p className="mt-4 text-lg leading-relaxed text-[#101010]/78">En el momento que lo dijo respiré, profundo, basta solo que alguien diga la palabra respirar para que respiremos, por eso ahora vos estas respirando más conscientemente.</p>
                <div className="my-8 h-px bg-[#2F5D50]/20" />
                <p className="font-serif text-2xl text-[#A63A2B]">La experiencia taller que propongo durará 4 meses y el eje tiene que ver con el movimiento y la respiración.</p>
                <p className="mt-4 text-lg leading-relaxed text-[#101010]/78">Los movimientos son 16, y forman parte de lo que es conocido como la FORMA 16 del Tai Chi. Una coreografia. Es un trabajo destinado esencialmente a personas que ponen el cuerpo en el escenario. Esencialmente bailarines y actores. Nadie está excluido.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="rounded-[2.5rem] border border-[#C8A96A]/30 bg-[#2F5D50] p-8 shadow-xl md:p-14 text-[#F4EFE7] relative overflow-hidden">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C8A96A]/20" />
            <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-5xl">El principio del STOP y la presencia</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 relative z-10">
              <p className="text-lg leading-relaxed text-[#F4EFE7]/80">Durante 15 años compartí en un retiro con artistas los principios que entendí formaban parte esencial del proceso creativo. Uno de los principios que compartí siempre fue el STOP. La búsqueda del stop como principio fundamental en el trabajo creativo. Este taller es una profundización sobre el principio del STOP.</p>
              <p className="text-lg leading-relaxed text-[#F4EFE7]/80">Es posible que en tu propio trayecto has escuchado a alguna persona hablar de la presencia de alguien en el escenario, poco se sabe acerca de como se construye la presencia. Este taller es para construir presencia. Es para estar presente, para respirar conscientemente y en el silencio estar.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10" id="programa">
          <SectionTitle kicker="Temas" title="Contenidos del Taller" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
            <div className="flex flex-col gap-3">
              {topics.map((m, i) => (
                <button key={m.id} type="button" onClick={() => setActive(i)} aria-pressed={active === i} className={`rounded-2xl border p-5 text-left transition ${active === i ? "border-[#2F5D50] bg-[#2F5D50] text-[#F4EFE7]" : "border-[#C8A96A]/30 bg-[#F4EFE7]/80 hover:border-[#2F5D50]/50"}`}>
                  <div className="mb-2 text-xs uppercase tracking-[0.3em] opacity-70">Tema {m.id}</div>
                  <div className="flex items-center justify-between gap-4 font-serif text-2xl">{m.title}<Icon name="chevron" size={18} /></div>
                </button>
              ))}
            </div>
            <Card className="min-h-full bg-[#101010] text-[#F4EFE7]">
              <div className="p-8 md:p-12">
                <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Tema {currentTopic.id}</div>
                <h3 className="font-serif text-4xl md:text-5xl">{currentTopic.title}</h3>
                <div className="mt-8 flex flex-wrap gap-4">
                  {currentTopic.items.map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-[#F4EFE7]/10 bg-[#222222] p-5 text-sm leading-relaxed text-[#dddddd] w-full">
                      <strong className="block text-base text-[#ffffff] font-semibold mb-2">{item.name}</strong>
                      {item.desc}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="rounded-[2.5rem] border border-[#C8A96A]/30 bg-[#F4EFE7]/50 p-8 shadow-xl md:p-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl text-[#101010] mb-4">Modalidad</h3>
              <p className="text-lg leading-relaxed text-[#101010]/75">El taller tiene una duración de 4 meses con una regularidad de 2 veces por semana y una práctica de una hora. Incluye ademas clases individuales que forman parte del proceso creativo.</p>
              <div className="mt-6 space-y-2 text-[#2F5D50] font-medium">
                <p>• Miércoles 21:30 a 22:30 (Hora Argentina)</p>
                <p>• Sábados 8:00 AM a 9:00 AM (Hora Argentina)</p>
                <p className="text-[#A63A2B] mt-4 font-bold">Clase abierta 9 de mayo</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-[#101010] mb-4">El Humor en la Práctica</h3>
              <p className="text-lg leading-relaxed text-[#101010]/75">Existe un preconcepto con respecto a ciertas prácticas, una cierta seriedad, en lo personal no creo que el humor pueda interferir de forma negativa en ningún tipo de práctica de autoconocimiento.</p>
              <p className="mt-4 text-lg leading-relaxed text-[#101010]/75">De hecho la mayoría de las explicaciones sobre el yin y yang se usará como material la pelicula Kung Fu Panda.</p>
            </div>
          </div>
        </section>

        <InstructorSection />
        <RegistrationForm />
      </main>
    </>
  );
}

function Badge({ iconName, text }) {
  return <div className="flex items-center gap-2 rounded-full border border-[#C8A96A]/40 bg-[#F4EFE7]/70 px-4 py-2 text-sm uppercase tracking-[0.15em] text-[#2F5D50]"><Icon name={iconName} size={18} />{text}</div>;
}

function SectionTitle({ kicker, title }) {
  return <div className="max-w-3xl"><div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#2F5D50]"><span className="h-px w-12 bg-[#C8A96A]" />{kicker}</div><h2 className="font-serif text-4xl leading-tight tracking-[0.02em] md:text-6xl">{title}</h2></div>;
}
