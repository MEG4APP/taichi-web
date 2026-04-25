import React, { useMemo, useState } from "react";

const months = [
  {
    id: "01",
    title: "Raíz, respiración y presencia",
    objective: "Construir una base corporal estable.",
    items: [
      "Principios del Taichi: lentitud, eje, continuidad.",
      "Respiración consciente.",
      "Peso, apoyo y transferencia.",
      "Chikung inicial para desbloqueo energético.",
      "Cuerpo disponible para la escena.",
      "Introducción al I Ching como pensamiento de transformación.",
    ],
  },
  {
    id: "02",
    title: "Equilibrio, centro y dirección",
    objective: "Trabajar el cuerpo como arquitectura viva.",
    items: [
      "Centro corporal y eje vertical.",
      "Equilibrio dinámico.",
      "Movimiento circular.",
      "Relación entre fuerza suave y presencia.",
      "Secuencias básicas de Taichi.",
      "Chikung para concentración y estabilidad.",
      "Hexagramas del I Ching vinculados al cambio, la quietud y la acción.",
    ],
  },
  {
    id: "03",
    title: "Energía, atención y composición escénica",
    objective: "Traducir la práctica energética al lenguaje del actor y del bailarín.",
    items: [
      "Energía interna y proyección.",
      "Mirada, intención y desplazamiento.",
      "Movimiento lento como entrenamiento de precisión.",
      "Presencia sin exceso expresivo.",
      "Chikung para expansión y recogimiento.",
      "I Ching como herramienta poética para creación escénica.",
    ],
  },
  {
    id: "04",
    title: "Integración artística",
    objective: "Llevar el Taichi al entrenamiento creativo.",
    items: [
      "Secuencia personal de movimiento.",
      "Partitura energética.",
      "Respiración, imagen y acción.",
      "Del gesto cotidiano al gesto escénico.",
      "Creación de una breve composición corporal.",
      "Cierre ritual con lectura simbólica desde el I Ching.",
    ],
  },
];

const benefits = [
  ["Disciplina", "corporal y energética", "compass"],
  ["Concentración", "más precisa en escena", "eye"],
  ["Equilibrio", "físico, emocional y respiratorio", "circle"],
  ["Autoconocimiento", "a través del movimiento lento", "spiral"],
  ["Presencia", "sin exceso expresivo", "spark"],
  ["Escucha", "interna y espacial", "wave"],
  ["Respiración", "intención y acción", "wind"],
  ["Símbolo", "Chikung e I Ching", "hexagram"],
];

const classStructure = [
  ["Apertura y respiración", "10 min", "Llegada al cuerpo, silencio, eje y atención."],
  ["Chikung", "25 min", "Activación energética suave, trabajo respiratorio y desbloqueo."],
  ["Técnica de Taichi", "45 min", "Principios, secuencias, desplazamientos, equilibrio y continuity."],
  ["Aplicación escénica", "25 min", "Presencia, mirada, acción, partitura y composición."],
  ["Cierre con I Ching", "15 min", "Reflexión simbólica: cambio, quietud, dirección, energía, proceso."],
];

function validateWorkshopData() {
  const errors = [];

  if (months.length !== 4) errors.push("El programa debe tener exactamente 4 meses.");

  months.forEach((month, index) => {
    if (!month.id || !month.title || !month.objective) {
      errors.push(`El mes ${index + 1} está incompleto.`);
    }
    if (!Array.isArray(month.items) || month.items.length < 5) {
      errors.push(`El mes ${index + 1} necesita al menos 5 contenidos.`);
    }
  });

  if (benefits.length < 8) errors.push("La sección beneficios debe conservar al menos 8 beneficios.");
  if (classStructure.length !== 5) errors.push("La estructura de clase debe tener 5 momentos.");
  if (!classStructure.some(([name]) => name === "Cierre con I Ching")) errors.push("Debe existir un cierre con I Ching.");
  if (!months[0].title.includes("Raíz")) errors.push("El Mes 1 debe conservar el eje de raíz/presencia.");

  return errors;
}

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
      return (
        <svg {...common}>
          <path d="M7 3v3M17 3v3M4.5 9.5h15" />
          <rect x="4" y="5" width="16" height="15" rx="2.5" />
          <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="10" rx="1.5" />
          <path d="M3 19h18l-2-4H5l-2 4Z" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m9 5 7 7-7 7" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path d="M3 8c3 0 3 3 6 3s3-3 6-3 3 3 6 3" />
          <path d="M3 14c3 0 3 3 6 3s3-3 6-3 3 3 6 3" />
        </svg>
      );
    case "wind":
      return (
        <svg {...common}>
          <path d="M3 8h11a3 3 0 1 0-3-3" />
          <path d="M3 13h16a2.5 2.5 0 1 1-2.5 2.5" />
          <path d="M3 18h8" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2.5 14.3 9l6.7 3-6.7 3L12 21.5 9.7 15 3 12l6.7-3L12 2.5Z" />
        </svg>
      );
    case "spiral":
      return (
        <svg {...common}>
          <path d="M12 4a8 8 0 1 1-7.3 4.7" />
          <path d="M12 8a4 4 0 1 1-3.6 2.2" />
          <path d="M12 11.5a.5.5 0 1 1-.5.5" />
        </svg>
      );
    case "hexagram":
      return (
        <svg {...common}>
          <path d="M5 6h14M5 10h6M13 10h6M5 14h14M5 18h6M13 18h6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

function ButtonLike({ children, href }) {
  if (href) {
    return (
      <a className="inline-flex items-center justify-center rounded-full border border-[#A63A2B]/50 px-7 py-3 text-base font-medium text-[#A63A2B] transition hover:bg-[#A63A2B]/10" href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className="rounded-full bg-[#2F5D50] px-7 py-3 text-base font-medium text-[#F4EFE7] transition hover:bg-[#23463d]">
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-[#C8A96A]/30 shadow-xl ${className}`}>{children}</div>;
}

function InkFigure() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-[#C8A96A]/30 bg-[#F4EFE7]/70 shadow-2xl shadow-black/10">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "radial-gradient(#101010 0.8px, transparent 0.8px)", backgroundSize: "18px 18px" }} />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2F5D50]/50 animate-[spin_36s_linear_infinite]" />
      <div className="absolute left-[16%] top-[18%] h-[270px] w-[270px] rounded-full border-r-2 border-t-2 border-[#2F5D50] animate-[spin_42s_linear_infinite_reverse]" />
      <div className="absolute left-[16%] top-[55%] flex flex-col gap-2 text-[#2F5D50]">
        <span className="h-1 w-16 bg-current" />
        <span className="h-1 w-10 bg-current" />
        <span className="h-1 w-16 bg-current" />
        <span className="h-1 w-10 bg-current" />
        <span className="h-1 w-16 bg-current" />
      </div>
      <div className="absolute left-[33%] top-[19%] h-72 w-40 origin-bottom -rotate-12 rounded-[50%] bg-[#101010] blur-[0.2px] transition-transform duration-700 hover:-rotate-6" style={{ clipPath: "polygon(40% 0, 70% 8%, 78% 35%, 100% 50%, 70% 58%, 84% 100%, 47% 83%, 20% 100%, 38% 58%, 0 45%, 28% 33%)" }} />
      <div className="absolute left-[48%] top-[18%] h-16 w-16 rounded-full bg-[#101010]" />
      <div className="absolute left-[58%] top-[31%] h-4 w-40 -rotate-12 rounded-full bg-[#101010]" />
      <div className="absolute left-[24%] top-[36%] h-4 w-32 rotate-12 rounded-full bg-[#101010]" />
      <div className="absolute left-[42%] top-[54%] h-5 w-48 rotate-[58deg] rounded-full bg-[#101010]" />
      <div className="absolute left-[23%] top-[63%] h-5 w-52 -rotate-[38deg] rounded-full bg-[#101010]" />
      <div className="absolute bottom-8 right-10 h-20 w-20 rounded-full border-[10px] border-[#A63A2B] border-l-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-[#C8A96A] bg-[#F4EFE7]/80 px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-[#2F5D50]">
        Taichi · Chikung · I Ching
      </div>
    </div>
  );
}

export default function TaichiSergioMercurioLanding() {
  const [active, setActive] = useState(0);
  const validationErrors = useMemo(() => validateWorkshopData(), []);
  const currentMonth = months[active] || months[0];

  return (
    <main className="min-h-screen bg-[#F4EFE7] text-[#101010]" style={{ backgroundImage: "linear-gradient(120deg, rgba(200,169,106,.10), transparent 30%, rgba(47,93,80,.07)), radial-gradient(circle at 80% 10%, rgba(166,58,43,.08), transparent 22%)" }}>
      {validationErrors.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
          <div className="rounded-2xl border border-[#A63A2B]/40 bg-[#A63A2B]/10 p-4 text-sm text-[#A63A2B]">
            <strong>Revisión de contenido:</strong> {validationErrors.join(" ")}
          </div>
        </div>
      )}

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-16">
        <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#C8A96A]/50" />
        <div className="absolute right-10 top-12 text-xs uppercase tracking-[0.45em] text-[#2F5D50]">Online · 4 meses</div>

        <div className="relative z-10 flex flex-col justify-center pt-16 opacity-100 lg:pt-0">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#2F5D50]">
            <span className="h-px w-14 bg-[#C8A96A]" />
            Taller para artistas escénicos
          </div>
          <h1 className="font-serif text-6xl leading-[0.9] tracking-[0.05em] md:text-8xl lg:text-9xl">
            TAICHI
            <span className="block text-3xl font-normal tracking-[0.45em] text-[#2F5D50] md:text-5xl">CON</span>
            <span className="block text-4xl tracking-[0.22em] text-[#A63A2B] md:text-6xl">SERGIO MERCURIO</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#101010]/75">
            Un entrenamiento corporal, energético y perceptivo para actores, actrices y bailarines: presencia, equilibrio, respiración, dirección y silencio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge iconName="calendar" text="Miércoles y viernes" />
            <Badge iconName="laptop" text="Modalidad online" />
            <Badge iconName="circle" text="4 meses" />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLike>Solicitar información</ButtonLike>
            <ButtonLike href="#programa">Ver programa</ButtonLike>
          </div>
        </div>

        <div className="relative z-10 flex items-center">
          <InkFigure />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Card className="bg-[#101010] text-[#F4EFE7]">
            <div className="p-8 md:p-10">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Frase fuerza</p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">Moverse menos para estar más presente.</h2>
              <div className="my-8 h-px bg-[#C8A96A]/40" />
              <p className="text-xl text-[#F4EFE7]/75">El arte de sostener la presencia.</p>
            </div>
          </Card>

          <Card className="bg-[#F4EFE7]/80">
            <div className="p-8 md:p-10">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#2F5D50]">Concepto central</p>
              <p className="text-lg leading-relaxed text-[#101010]/78">
                Taichi con Sergio Mercurio es un espacio de entrenamiento corporal, energético y perceptivo para artistas escénicos. No se plantea como una práctica terapéutica aislada, sino como una disciplina de presencia: una vía para desarrollar concentración, equilibrio, escucha interna, continuidad del movimiento y conciencia energética.
              </p>
              <p className="mt-5 font-serif text-2xl text-[#A63A2B]">
                El cuerpo escénico no solo necesita expresividad: necesita raíz, eje, respiración, dirección y silencio.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <SectionTitle kicker="Beneficios" title="Una práctica para organizar la presencia" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text, iconName]) => (
            <Card key={title} className="group h-full bg-[#F4EFE7]/80 transition hover:-translate-y-1 hover:border-[#2F5D50]/50 hover:shadow-lg">
              <div className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#2F5D50]/40 text-[#2F5D50] transition group-hover:bg-[#2F5D50] group-hover:text-[#F4EFE7]">
                  <Icon name={iconName} size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#101010]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#101010]/65">{text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10" id="programa">
        <SectionTitle kicker="Programa" title="Cuatro meses de entrenamiento progresivo" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
          <div className="flex flex-col gap-3">
            {months.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`rounded-2xl border p-5 text-left transition ${active === i ? "border-[#2F5D50] bg-[#2F5D50] text-[#F4EFE7]" : "border-[#C8A96A]/30 bg-[#F4EFE7]/80 hover:border-[#2F5D50]/50"}`}
              >
                <div className="mb-2 text-xs uppercase tracking-[0.3em] opacity-70">Mes {m.id}</div>
                <div className="flex items-center justify-between gap-4 font-serif text-2xl">
                  {m.title}
                  <Icon name="chevron" size={18} />
                </div>
              </button>
            ))}
          </div>

          <Card className="min-h-full bg-[#101010] text-[#F4EFE7]">
            <div className="p-8 md:p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Mes {currentMonth.id}</div>
              <h3 className="font-serif text-4xl md:text-5xl">{currentMonth.title}</h3>
              <p className="mt-4 text-lg text-[#F4EFE7]/70">
                <span className="text-[#C8A96A]">Objetivo:</span> {currentMonth.objective}
              </p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {currentMonth.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#F4EFE7]/10 bg-[#F4EFE7]/5 p-4 text-sm leading-relaxed text-[#F4EFE7]/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <SectionTitle kicker="Cada clase" title="Una estructura ritual, técnica y creativa" />
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#C8A96A]/30 bg-[#F4EFE7]/80 shadow-xl">
          {classStructure.map(([name, time, desc], index) => (
            <div key={name} className="grid gap-4 border-b border-[#C8A96A]/20 p-6 last:border-b-0 md:grid-cols-[.25fr_.18fr_1fr] md:items-center">
              <div className="font-serif text-2xl text-[#A63A2B]">
                {String(index + 1).padStart(2, "0")}. {name}
              </div>
              <div className="w-fit rounded-full border border-[#2F5D50]/40 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#2F5D50]">{time}</div>
              <p className="text-[#101010]/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2F5D50] p-8 text-[#F4EFE7] shadow-2xl md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C8A96A]/40" />
          <div className="absolute bottom-8 right-12 h-20 w-20 rounded-full border-[10px] border-[#A63A2B] border-l-transparent" />
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">Taichi · Chikung · I Ching · Presencia escénica</p>
          <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">Para cuerpos que crean. Para artistas que necesitan volver al centro.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F4EFE7]/75">
            Durante 4 meses trabajaremos el cuerpo como territorio de disciplina, respiración y autoconocimiento.
          </p>
          <button type="button" className="mt-8 rounded-full bg-[#F4EFE7] px-8 py-3 text-base font-medium text-[#2F5D50] transition hover:bg-white">
            Inscribirme al taller
          </button>
        </div>
      </section>
    </main>
  );
}

function Badge({ iconName, text }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#C8A96A]/40 bg-[#F4EFE7]/70 px-4 py-2 text-sm uppercase tracking-[0.15em] text-[#2F5D50]">
      <Icon name={iconName} size={18} />
      {text}
    </div>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#2F5D50]">
        <span className="h-px w-12 bg-[#C8A96A]" />
        {kicker}
      </div>
      <h2 className="font-serif text-4xl leading-tight tracking-[0.02em] md:text-6xl">{title}</h2>
    </div>
  );
}

if (typeof console !== "undefined") {
  const devTestErrors = validateWorkshopData();
  console.assert(devTestErrors.length === 0, `Datos del taller inválidos: ${devTestErrors.join(" | ")}`);
  console.assert(months.length === 4, "El taller debe tener cuatro meses.");
  console.assert(months[0].title.includes("Raíz"), "El Mes 1 debe conservar el eje de raíz/presencia.");
  console.assert(benefits.length >= 8, "Debe haber al menos ocho beneficios.");
  console.assert(classStructure.length === 5, "La clase debe tener cinco momentos pedagógicos.");
  console.assert(classStructure.some(([name]) => name === "Cierre con I Ching"), "Debe existir un cierre con I Ching.");
}
