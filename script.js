/* ==========================================================
   UNITREE G1 Setup · Robotics 4.0
   Contenido, videos y documentación del G1. Los botones abren
   la guía / archivo .md correspondiente; cada tarjeta embebe
   sus videos y permite ampliar las imágenes.
   ========================================================== */

/* ---------- Base del repositorio de documentación ---------- */
const repoBase = "https://github.com/dockerobotics40/Unitree-setup/blob/main/";
const ejemplosBase = repoBase + "ejemplos/";
const imgBase = "assets/img/ejemplos/";

/* ---------- Íconos de línea reutilizables 24x24 ---------- */
const icons = {
  cpu: `<path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="9.5" y="9.5" width="5" height="5" stroke="currentColor" stroke-width="1.4"/>`,
  gear: `<circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.1 5.9l-1.7 1.7M7.6 16.5l-1.7 1.7M18.1 18.1l-1.7-1.7M7.6 7.5 5.9 5.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  run: `<circle cx="15.5" cy="5.5" r="2" stroke="currentColor" stroke-width="1.6"/><path d="M11 21l2.2-5.4-2.6-2.4.9-4.4 3.6 3 3.4-1.1M6 14.5l3-1.3M9 21l2.4-4.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  gamepad: `<rect x="3" y="8" width="18" height="9" rx="4.5" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5v4M6 12.5h4M16.2 11.2h.01M18.4 13h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  hand: `<path d="M8 12V6.4a1.4 1.4 0 0 1 2.8 0V11M10.8 11V5.6a1.4 1.4 0 0 1 2.8 0V11M13.6 11V6.6a1.4 1.4 0 0 1 2.8 0V12M16.4 12.4V9.6a1.3 1.3 0 0 1 2.6 0V15c0 3.3-2.4 6-6.4 6-3 0-4.4-1.2-5.7-3l-2.3-3.4c-.5-.8-.2-1.7.6-2 .7-.3 1.4 0 1.9.7L8 12" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>`,
  target: `<circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4.6" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>`,
  route: `<circle cx="6" cy="18" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="18" cy="6" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M8.2 16.6 15.8 8M6 15.6V11a3 3 0 0 1 3-3h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/>`
};

/* ---------- Datos: Ejemplos y demostraciones del G1 ----------
   media[]:
     { type:'video', embed:'<url youtube/embed>', label:'...' }
     { type:'image', src:'<archivo>', caption:'...' }
   Los pares de imágenes se muestran lado a lado con "pair:true".
------------------------------------------------------------------ */
const examples = [
  {
    icon: "gear",
    tag: "rt/lowcmd · bajo nivel",
    title: "Ejemplo de bajo nivel",
    desc: "Control directo de las articulaciones y estados de motor del G1 mediante comandos de bajo nivel.",
    doc: ejemplosBase + "Ejemplo_bajo_nivel.md",
    media: [
      { type: "video", embed: "https://www.youtube.com/embed/bJHJq7a1UxI", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "run",
    tag: "loco_client · alto nivel",
    title: "Ejemplo de alto nivel",
    desc: "Locomoción de alto nivel del G1: desplazamiento y comandos sin intervenir directamente el bajo nivel.",
    doc: ejemplosBase + "Ejemplo_alto_nivel.md",
    media: [
      { type: "image", src: "Terminal_ejemplo_alto_nivel.png", caption: "Interacción del terminal (código Python)" },
      { type: "video", embed: "https://www.youtube.com/embed/CJo4wxGI6Ks?si=3N4NT0TUILEJakIF", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "gamepad",
    tag: "./teclado · W A S D",
    title: "Código básico: control por teclas (WASD)",
    desc: "Movimiento manual del G1 con teclado: avanzar, girar y ajustar velocidad lineal y angular en tiempo real.",
    doc: ejemplosBase + "Codigo_basico_wasd_altoNivel.md",
    media: [
      { type: "image", src: "ejemplo_wasd_uno.png", caption: "Interacción terminal", pair: true },
      { type: "image", src: "ejemplo_wasd_dos.png", caption: "Controles WASD", pair: true },
      { type: "video", embed: "https://www.youtube.com/embed/jj1Gn3fxLRc?si=CPcA65oVR0G20dub", label: "Movimiento real esperado con teclas" }
    ]
  },
  {
    icon: "target",
    tag: "trayectoria · SetVelocity",
    title: "Código básico: trayectoria predefinida",
    desc: "Secuencia de movimiento programada; primero validada en simulación y luego ejecutada en el robot real.",
    doc: ejemplosBase + "Codigo_basico_trayectoria_altoNivel%20copy.md",
    media: [
      { type: "video", embed: "https://www.youtube.com/embed/2albVCj-lfY?si=ctes8ysSY2M1rkZO", label: "Simulación en entorno virtual" },
      { type: "video", embed: "https://www.youtube.com/embed/o6F-p4FtgTM?si=E-pPeRKYXnoFlLim", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "hand",
    tag: "brazos · secuencia",
    title: "Movimiento y manejo de brazos",
    desc: "Rutina de movimiento y manejo de los brazos del G1, con secuencia paso a paso.",
    doc: ejemplosBase + "Ejemplo_movimiento_brazos.md",
    media: [
      { type: "image", src: "paso_uno_ejemploARM.png", caption: "Paso 1", pair: true },
      { type: "image", src: "paso_dos_ejemploARM.png", caption: "Paso 2", pair: true },
      { type: "video", embed: "https://www.youtube.com/embed/kf_g4sMIQOI?si=exnA9ASSlLlwBQwI", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "hand",
    tag: "brazos · interactivo",
    title: "Movimiento de brazos personalizado e interactivo",
    desc: "Control articulado de los brazos con interacción desde el terminal en tiempo real.",
    doc: ejemplosBase + "Codigo_movimento_articulaciones_brazos_interactivo.md",
    media: [
      { type: "image", src: "flujoInteraccionBrazos.png", caption: "Flujo de interacción del terminal" },
      { type: "video", embed: "https://www.youtube.com/embed/9HIMpSL6rIA?si=Ms6-j_9WK53HaRsJ", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "run",
    tag: "brazos + caminata",
    title: "Brazos interactivo — con caminata",
    desc: "Combina el movimiento de brazos interactivo con la locomoción del G1 en una misma secuencia.",
    doc: ejemplosBase + "Codigo_basico_brazos_caminata.md",
    media: [
      { type: "image", src: "ejemplo_caminata_brazo.png", caption: "Interacción terminal: brazos y caminata" },
      { type: "video", embed: "https://www.youtube.com/embed/skA4vJCROCI?si=eTejO2e1C5tGuB95", label: "Ejemplo de interacción con el terminal" },
      { type: "video", embed: "https://www.youtube.com/embed/mmpJb-NUs1E?si=cnMBsu9jtxs5b7_T", label: "Movimiento real esperado" }
    ]
  },
  {
    icon: "route",
    tag: "odometría · navegación",
    title: "Movimiento automático con odometría",
    desc: "Navegación autónoma del G1 basada en odometría, comparando trayectoria ideal, trayectoria real y movimiento en hardware.",
    doc: ejemplosBase + "Protocolo_navegaci%C3%B3n_autonoma.md",
    media: [
      { type: "image", src: "flujoAlgoritmoOdom.png", caption: "Flujo del algoritmo" },
      { type: "video", embed: "https://www.youtube.com/embed/fgK6aL1MDec?si=HM6dlLVbMBhHyy31", label: "Simulación: trayectoria ideal" },
      { type: "video", embed: "https://www.youtube.com/embed/GoQlwUrcJoI?si=rXljIV49_K230bsJ", label: "Simulación: trayectoria real" },
      { type: "video", embed: "https://www.youtube.com/embed/PeUwF_z0-3Y?si=Vmgw0x_Gjno7hu9a", label: "Movimiento real" }
    ]
  }
];

/* ---------- Apertura de documentación ---------- */
function openDoc(doc){
  if(!doc) return;
  window.open(doc, "_blank", "noopener");
}

/* ---------- Escape básico para atributos ---------- */
function esc(str){
  return String(str).replace(/"/g, "&quot;");
}

/* ---------- Render de una pieza de media ---------- */
function mediaTemplate(m){
  if(m.type === "video"){
    return `
      <div class="media-item">
        <span class="media-label">${m.label || "Video"}</span>
        <div class="iframe-wrap">
          <iframe src="${m.embed}"
                  title="${esc(m.label || "Video del ejemplo")}"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>`;
  }
  // imagen
  return `
    <figure class="media-figure">
      <img class="zoomable" src="${imgBase}${m.src}" alt="${esc(m.caption || "Imagen del ejemplo")}" loading="lazy">
      ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
    </figure>`;
}

/* ---------- Agrupa imágenes marcadas como "pair" lado a lado ---------- */
function renderMedia(media){
  let html = "";
  for(let i = 0; i < media.length; i++){
    const m = media[i];
    const next = media[i + 1];

    if(m.type === "image" && m.pair && next && next.type === "image" && next.pair){
      html += `<div class="media-pair">${mediaTemplate(m)}${mediaTemplate(next)}</div>`;
      i++; // salta la siguiente, ya renderizada
    } else {
      html += mediaTemplate(m);
    }
  }
  return html;
}

/* ---------- Plantilla de tarjeta de ejemplo ---------- */
function cardTemplate(item){
  return `
    <article class="card card-example">
      <div class="card-media">
        ${renderMedia(item.media)}
      </div>

      <div class="card-body">
        <span class="card-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        ${item.desc ? `<p>${item.desc}</p>` : ""}

        <div class="card-actions">
          <button class="btn btn-ghost" data-doc="${item.doc}">
            Ver paso a paso →
          </button>
        </div>
      </div>
    </article>`;
}

/* ---------- Renderizado de la grilla ---------- */
function renderGrid(id, data){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = data.map(cardTemplate).join("");
}

renderGrid("examplesGrid", examples);

/* ---------- Delegación de clics para botones con data-doc ---------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-doc]");
  if(btn){
    openDoc(btn.getAttribute("data-doc"));
  }
});

/* ---------- Lightbox (zoom de imágenes) ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt){
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".zoomable");
  if(img){
    openLightbox(img.src, img.alt);
  }
});
if(lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if(lightbox){
  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox) closeLightbox();
  });
}
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});

/* ---------- Menú móvil ---------- */
const navToggle = document.getElementById("navToggle");
if(navToggle){
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  const mainNav = document.getElementById("mainNav");
  if(mainNav){
    mainNav.addEventListener("click", (e) => {
      if(e.target.tagName === "A"){
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/* ---------- Scrollspy para resaltar la sección activa ---------- */
const sections = document.querySelectorAll("main .section, .hero");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");

if(sections.length && navLinks.length && "IntersectionObserver" in window){
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((section) => {
    if(section.id) spy.observe(section);
  });
}

/* ---------- Año en el footer ---------- */
const yearEl = document.getElementById("year");
if(yearEl){
  yearEl.textContent = `© ${new Date().getFullYear()}`;
}
