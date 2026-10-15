/* Alejo Jáuregui · portfolio: language switch, links, protected email, hero aura, reveals. No dependencies. */
(function () {
  "use strict";

  // ---------------------------------------------------------------- i18n (Spanish lives in the HTML)
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About", "nav.quests": "Quests", "nav.projects": "Projects", "nav.talents": "Talents", "nav.content": "Content", "nav.contact": "Contact",
    "hero.kicker": "Welcome to the Nexus",
    "hero.r1": "Enterprise Architect", "hero.r3": "Creator",
    "hero.lead": "Systems Engineer with 10+ years in technology. By day I design architectures for banking; the rest of the time I design worlds, games and videos.",
    "hero.cta1": "Open the Quest Log", "hero.cta2": "Summon Alejo",
    "about.title": "About me",
    "about.p1": "I'm a Systems Engineer (Fundación Universitaria Konrad Lorenz) with a Master's in Video Game Design and Development (VIU – Valencian International University). I live in Bogotá, Colombia.",
    "about.p2": "I work as an Enterprise Architect at Banco Davivienda, on the innovation front: I design AS-IS and TO-BE architectures, set guidelines and standards, evaluate vendors and startups, and design cloud solutions on GCP, AWS and Azure.",
    "about.p3": "My other half is game design: Unity prototypes, interactive storytelling, and Gamer's Cuts, my series on video game history and design.",
    "facet.arch": "Enterprise and solution architecture, IT governance and cloud (GCP, AWS, Azure) in banking and insurance.",
    "facet.inno": "Innovation and startup evaluation, digital transformation, and AI-assisted spec-driven development.",
    "facet.crea": "Video game design and development in Unity, interactive storytelling, and video for YouTube.",
    "quests.title": "Quest Log", "quests.sub": "Completed missions and active roles.", "now": "present",
    "q1.role": "Enterprise Architect · Innovation",
    "q1.a": "AS-IS and TO-BE architectures aligned with the bank's enterprise architecture.",
    "q1.b": "Guidelines, policies and standards to implement, change or retire applications.",
    "q1.c": "Software selection and technical due diligence of startups for Grupo Bolívar's venture capital.",
    "q1.d": "Cloud architectures on Google Cloud Platform, AWS and Azure.",
    "q2.role": "Digital Projects Analyst & Innovation Lead",
    "q2.a": "Technical and business evaluation of startups in the HDI Startups accelerator.",
    "q2.b": "Application architectures for Digital Transformation's innovation domain.",
    "q2.c": "AS-IS / TO-BE analysis, requirements, user stories and UX processes for Latin America.",
    "q3.role": "Systems Auditor · Cooperative sector",
    "q3.a": "Systems audits and technology-transformation advice for employee funds and cooperatives.",
    "q4.role": "Teaching assistant · Unity 3D",
    "q4.a": "Taught and mentored Unity 3D projects; guided the UX/UI design of the final projects.",
    "q5.role": "Architecture intern",
    "q5.a": "Technical architecture designs, vendor evaluation and upkeep of the bank's architecture.",
    "tag.active": "Active", "tag.done": "Completed",
    "edu.title": "Academy",
    "edu.viu": "Master's in Video Game Design and Development", "edu.kl": "Systems Engineering", "edu.ar": "Augmented Reality · Game development",
    "projects.title": "Projects", "projects.sub": "What I'm building and what I've built.",
    "p.gc": "The intro of my YouTube series: a trip through seven video game generations, made 100% in code (HTML, WebGL and GSAP rendered to video with HyperFrames). Music and sound effects composed in code too.",
    "p.twj": "My Master's final project (VIU): the story of Aaron, a farmer who becomes a wizard to rescue his daughter. Designed and built in Unity.",
    "p.rpg": "A habit and task tracker gamified like an RPG: every quest grants XP and levels up your character. Local-first, with optional sync, bring-your-own-key AI, and four visual skins on one design system.",
    "p.nexus.t": "Alejo's Nexus", "p.nexus": "My personal portal: a Markdown blog with its own editor, a REST API, a media gallery and a built-in music player.",
    "p.ai": "A local AI studio on my Mac: Ollama models with fixed roles (architect, critic, art director, scriptwriter) that my agents consult for a second opinion, without spending cloud.",
    "p.thesis.t": "Emotional storytelling · Thesis", "p.thesis": "A narrative game prototype for children that changes the story according to the emotions the system detects in the player. My Systems Engineering thesis.",
    "badge.github": "View on GitHub", "badge.wip": "In progress", "badge.private": "Private code", "badge.2026": "2026",
    "talents.title": "Talent trees", "talents.sub": "Courses and certificates, with their credential ID.",
    "c.gcp": "Introduction to Google Cloud Platform", "c.aws": "AWS Cloud Practitioner course", "c.td": "Digital Transformation for Business",
    "c.db": "Database Fundamentals", "c.fs": "Full-stack and hybrid technologies", "c.sdd": "Spec Driven Development", "c.llm": "LLM Fundamentals",
    "c.ia": "Introduction to Artificial Intelligence", "c.agent": "Innovation Super Agent", "c.dt": "Design Thinking with Minds Garage",
    "c.sus": "Sustainability Lab Workshop", "c.rpg": "Advanced RPG creation with Unity", "c.ue": "Game development with Unreal Engine",
    "c.unity": "Game programming with Unity", "c.vg": "Video game creation", "c.pr": "Adobe Premiere Pro basics",
    "content.title": "Content", "content.sub": "Where I talk about video games, anime and what I'm building.",
    "ch.gc": "The “director's cut” of video game history and design.", "ch.ms": "This season's anime and a classic from the past.",
    "ch.rb": "Vlog: what I'm learning and building.", "ch.tw": "Live streams.",
    "contact.title": "Summon Alejo", "contact.sub": "Got an epic quest or need an ally for your party? Write to me.",
    "contact.write": "Write an email", "contact.copy": "Copy email",
    "footer": "© 2026 Alejo Jáuregui · Forged in code. Yorick takes you back up.",
  };
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var ES = {};
  nodes.forEach(function (n) { ES[n.getAttribute("data-i18n")] = n.textContent; });
  var UI = { es: { soon: "PRONTO", copied: "¡Correo copiado!", top: "Volver arriba" }, en: { soon: "SOON", copied: "Email copied!", top: "Back to top" } };
  var lang = "es";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en"); } catch (e) {}
  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    nodes.forEach(function (n) { var k = n.getAttribute("data-i18n"); n.textContent = (l === "en" ? EN[k] : ES[k]) || ES[k]; });
    document.getElementById("lang").textContent = l === "en" ? "ES" : "EN";
    document.querySelector(".yorick").setAttribute("aria-label", UI[l].top);
    Array.prototype.forEach.call(document.querySelectorAll(".channel:not([href]) h3"), function (h) { h.setAttribute("data-soon", UI[l].soon); });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  document.getElementById("lang").addEventListener("click", function () { apply(lang === "en" ? "es" : "en"); });

  // ---------------------------------------------------------------- links (assets/js/links.js)
  var L = window.LINKS || {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-link]"), function (a) {
    var url = L[a.getAttribute("data-link")];
    if (url) { a.href = url; a.rel = "me noopener"; } else if (a.classList.contains("btn")) { a.setAttribute("aria-disabled", "true"); }
  });
  apply(lang);

  // ---------------------------------------------------------------- email, assembled on demand (keeps it out of the HTML)
  function email() { return (L.email || []).join("@"); }
  document.getElementById("mail").addEventListener("click", function (e) { e.preventDefault(); window.location.href = "mailto:" + email(); });
  document.getElementById("copy").addEventListener("click", function () {
    var out = document.getElementById("copied");
    var done = function () { out.textContent = UI[lang].copied + " " + email(); };
    if (navigator.clipboard) navigator.clipboard.writeText(email()).then(done, done); else done();
  });

  // ---------------------------------------------------------------- hero aura (blue / purple / red, like the videos)
  var cv = document.getElementById("aura"), ctx = cv.getContext("2d");
  var COLS = ["43,108,255", "138,43,226", "255,46,59"];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function hash(n) { var x = Math.sin(n * 127.1) * 43758.5453; return x - Math.floor(x); }
  function size() { var r = cv.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2); cv.width = r.width * d; cv.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0); }
  function frame(ms) {
    var t = ms / 1000, w = cv.clientWidth, h = cv.clientHeight, cx = w / 2, cy = h * 0.47, R = w * 0.36;
    ctx.clearRect(0, 0, w, h);
    ctx.save(); ctx.globalCompositeOperation = "lighter";
    for (var l = 0; l < 3; l++) {
      var g = ctx.createRadialGradient(cx, cy, R * 0.35, cx, cy, R * (1.05 + l * 0.14));
      g.addColorStop(0, "rgba(" + COLS[l] + ",0)"); g.addColorStop(0.7, "rgba(" + COLS[l] + ",0.2)"); g.addColorStop(1, "rgba(" + COLS[l] + ",0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.5, 0, 7); ctx.fill();
    }
    for (var i = 0; i < 70; i++) {
      var a = hash(i) * 6.283, rr = R * (0.75 + hash(i + 1) * 0.45), len = 20 + hash(i + 2) * 60;
      var rise = (t * (40 + hash(i + 3) * 70) + hash(i + 4) * 200) % 200, fade = 1 - rise / 200, col = COLS[i % 3];
      var x = cx + Math.cos(a) * rr * 0.9, y = cy + Math.sin(a) * rr - rise * 0.5;
      var g2 = ctx.createLinearGradient(x, y, x, y - len);
      g2.addColorStop(0, "rgba(" + col + "," + (0.5 * fade).toFixed(3) + ")"); g2.addColorStop(1, "rgba(" + col + ",0)");
      ctx.strokeStyle = g2; ctx.lineWidth = 2 + hash(i + 5) * 4; ctx.lineCap = "round";
      var sway = Math.sin(t * 3 + i) * 8;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + sway, y - len * 0.5, x - sway * 0.5, y - len); ctx.stroke();
    }
    ctx.restore();
    if (!reduce) requestAnimationFrame(frame);
  }
  size(); window.addEventListener("resize", size);
  requestAnimationFrame(frame);

  // ---------------------------------------------------------------- reveal sections on scroll
  var targets = document.querySelectorAll(".section, .project, .facet, .tree, .quest");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
