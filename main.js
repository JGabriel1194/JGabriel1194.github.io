/* ============================================================
   LÓGICA DEL SITIO — normalmente no necesitas editar este
   archivo. Todo el contenido se edita en data.js.
   ============================================================ */

(function () {
  'use strict';
  const D = DATOS;
  const $ = (sel) => document.querySelector(sel);

  /* ---------- Iconos SVG reutilizables ---------- */
  const ICONOS = {
    code: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path></svg>',
    server: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="6" rx="2"></rect><path d="M6 8h.01M6 17h.01"></path></svg>',
    edu: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M6 12l6 3 6-3-6-3-6 3zM6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5"></path></svg>',
    chart: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 15l4-5 3 3 5-7"></path></svg>',
    frontend: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 8l3 4-3 4M14 16h3"></path></svg>',
    backend: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path></svg>',
    devops: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10M12 2v10l7 3"></path></svg>',
    ia: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5zM2 8v6M6 10.5V15c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5"></path></svg>',
    email: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>',
    whatsapp: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg>',
    ubicacion: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    cert: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M9 12.5L8 21l4-2 4 2-1-8.5"></path></svg>',
    flecha: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"></path></svg>',
  };

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ---------- Tema claro / oscuro ---------- */
  let tema;
  try { tema = localStorage.getItem('gs-theme'); } catch (e) {}
  tema = tema || D.config.temaInicial || 'dark';
  document.documentElement.dataset.theme = tema;
  $('#btn-tema').addEventListener('click', () => {
    tema = tema === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = tema;
    try { localStorage.setItem('gs-theme', tema); } catch (e) {}
  });

  /* ---------- Textos generales ---------- */
  $('#nav-logo').textContent = D.perfil.iniciales;
  $('#nav-nombre').textContent = D.perfil.nombre;
  $('#nav-subtitulo').textContent = D.perfil.subtituloNav;
  $('#hero-badge').textContent = D.perfil.badgeDisponible;
  $('#hero-nombre').textContent = D.perfil.nombre;
  $('#hero-desc').innerHTML = D.perfil.descripcion;
  $('#badge-foto-1').textContent = D.perfil.badgeFoto1;
  $('#badge-foto-2').textContent = D.perfil.badgeFoto2;
  $('#footer-logo').textContent = D.perfil.iniciales;
  $('#footer-nombre').textContent = D.perfil.nombre;
  $('#footer-sub').textContent = D.perfil.subtituloFooter;
  $('#anio').textContent = new Date().getFullYear();

  /* ---------- Menú ---------- */
  $('#nav-links').innerHTML = D.menu.map((m) =>
    `<a class="nav-link" data-nav="${esc(m.id)}" href="#${esc(m.id)}">${esc(m.etiqueta)}</a>`).join('');
  $('#mobile-menu').innerHTML = D.menuMovil.map((m) =>
    `<a href="#${esc(m.id)}">${esc(m.etiqueta)}</a>`).join('') +
    '<a href="#contacto" class="menu-cta">Contáctame</a>';

  const mobileMenu = $('#mobile-menu');
  $('#btn-menu').addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.addEventListener('click', (e) => { if (e.target.tagName === 'A') mobileMenu.classList.remove('open'); });

  /* ---------- Hero: stats y stack ---------- */
  $('#stats').innerHTML = D.stats.map((s) =>
    `<div><div class="stat-num">${esc(s.numero)}</div><div class="stat-label">${esc(s.etiqueta)}</div></div>`).join('');
  $('#stack-row').innerHTML = '<span class="stack-label">STACK //</span>' +
    D.stack.map((s) => `<span class="stack-item">${esc(s)}</span>`).join('');

  /* ---------- Efecto de escritura ---------- */
  (function typing() {
    const el = $('#typed');
    let ri = 0, ci = 0, dir = 1;
    function paso() {
      const palabra = D.perfil.roles[ri % D.perfil.roles.length];
      if (dir === 1) {
        ci++;
        if (ci >= palabra.length) { dir = -1; el.textContent = palabra; setTimeout(paso, 1500); return; }
      } else {
        ci--;
        if (ci <= 0) { dir = 1; ri++; ci = 0; }
      }
      el.textContent = palabra.slice(0, ci);
      setTimeout(paso, dir === 1 ? 80 : 38);
    }
    paso();
  })();

  /* ---------- Sobre mí ---------- */
  $('#sobre-parrafos').innerHTML = D.sobreMi.parrafos.map((p) => `<p>${p}</p>`).join('');
  $('#sobre-chips').innerHTML = D.sobreMi.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('');
  $('#enfoque-titulo').textContent = D.sobreMi.enfoque.titulo;
  $('#enfoque-desc').textContent = D.sobreMi.enfoque.descripcion;
  D.sobreMi.miniCards.forEach((m, i) => {
    const card = $('#about-mini-' + (i + 1));
    if (!card) return;
    card.querySelector('.about-mini-title').textContent = m.titulo;
    card.querySelector('.about-mini-sub').textContent = m.subtitulo;
  });
  $('#about-wide-titulo').textContent = D.sobreMi.cardAncha.titulo;
  $('#about-wide-sub').textContent = D.sobreMi.cardAncha.subtitulo;

  /* ---------- Servicios ---------- */
  $('#grid-servicios').innerHTML = D.servicios.map((s) => `
    <div class="service-card">
      <span class="service-icon">${ICONOS[s.icono] || ICONOS.code}</span>
      <h3>${esc(s.titulo)}</h3>
      <p>${esc(s.descripcion)}</p>
    </div>`).join('');

  /* ---------- Portafolio (filtros + proyectos) ---------- */
  let filtroActual = 'all';

  function renderFiltros() {
    $('#filtros').innerHTML = D.filtros.map((f) =>
      `<button class="filter-btn${f.id === filtroActual ? ' active' : ''}" data-filter="${esc(f.id)}">${esc(f.etiqueta)}</button>`).join('');
  }

  function renderProyectos() {
    const lista = filtroActual === 'all' ? D.proyectos : D.proyectos.filter((p) => p.categoria === filtroActual);
    $('#grid-proyectos').innerHTML = lista.map((p) => `
      <article class="project-card">
        <div class="project-media">
          ${p.imagen
            ? `<img src="${esc(p.imagen)}" alt="${esc(p.titulo)} – ${esc(p.organizacion)}" loading="lazy">`
            : `<div class="project-placeholder">${esc(p.placeholder || p.titulo)}</div>`}
          <span class="project-cat">${esc(p.etiquetaCategoria)}</span>
        </div>
        <div class="project-body">
          <div class="project-top"><h3>${esc(p.titulo)}</h3><span class="project-year">${esc(p.anio)}</span></div>
          <div class="project-org">${esc(p.organizacion)}</div>
          <p class="project-desc">${esc(p.descripcion)}</p>
          <div class="project-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          ${p.url ? `<a class="project-link" href="${esc(p.url)}" target="_blank" rel="noopener">Visitar sitio ${ICONOS.flecha}</a>` : ''}
        </div>
      </article>`).join('');
  }

  renderFiltros();
  renderProyectos();
  $('#filtros').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    filtroActual = btn.dataset.filter;
    renderFiltros();
    renderProyectos();
  });

  /* ---------- Habilidades ---------- */
  $('#grid-habilidades').innerHTML = D.habilidades.map((h) => `
    <div class="skill-card">
      <div class="skill-head"><span class="skill-icon">${ICONOS[h.icono] || ICONOS.frontend}</span><h3>${esc(h.titulo)}</h3></div>
      <div class="skill-tags">${h.tags.map((t) => `<span class="skill-tag">${esc(t)}</span>`).join('')}</div>
    </div>`).join('');

  /* ---------- Experiencia ---------- */
  $('#timeline').innerHTML = D.experiencia.map((j) => `
    <div class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="timeline-head">
        <h3>${esc(j.puesto)}</h3>
        <span class="period-badge${j.actual ? ' actual' : ''}">${esc(j.periodo)}</span>
      </div>
      <div class="timeline-org">${esc(j.organizacion)}</div>
      <p class="timeline-desc">${esc(j.descripcion)}</p>
    </div>`).join('');

  /* ---------- Formación ---------- */
  $('#grid-titulos').innerHTML = D.titulos.map((t) => `
    <div class="degree-card${t.destacado ? ' destacado' : ''} reveal">
      <div class="degree-meta">${esc(t.meta)}</div>
      <h3>${esc(t.titulo)}</h3>
      <div class="degree-org">${esc(t.organizacion)}</div>
    </div>`).join('');

  $('#grid-certs').innerHTML = D.certificaciones.map((c) => `
    <div class="cert-card">
      <div class="cert-top"><span class="cert-icon">${ICONOS.cert}</span><span class="cert-year">${esc(c.anio)}</span></div>
      <div class="cert-title">${esc(c.titulo)}</div>
      <div class="cert-org">${esc(c.organizacion)}</div>
      <div class="cert-meta">${esc(c.meta)}</div>
    </div>`).join('');

  /* ---------- Publicaciones ---------- */
  $('#lista-publicaciones').innerHTML = D.publicaciones.map((pub) => `
    <a class="pub-card reveal" href="${esc(pub.url)}" target="_blank" rel="noopener">
      <div class="pub-badges">
        ${pub.badges.map((b, i) => `<span class="${i === 0 ? 'pub-badge' : 'pub-tag'}">${esc(b)}</span>`).join('')}
        <span class="pub-year">${esc(pub.anio)}</span>
      </div>
      <h3>${esc(pub.titulo)}</h3>
      <p class="pub-cita">${pub.cita}</p>
      <div class="pub-link">Leer publicación ${ICONOS.flecha}</div>
    </a>`).join('');

  /* ---------- Contacto ---------- */
  $('#contact-cards').innerHTML = D.contacto.map((c) => {
    const inner = `
      <span class="contact-icon">${ICONOS[c.tipo] || ICONOS.email}</span>
      <span><span class="contact-label">${esc(c.etiqueta)}</span><b class="contact-value">${esc(c.valor)}</b></span>`;
    return c.enlace
      ? `<a class="contact-card" href="${esc(c.enlace)}"${c.enlace.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`
      : `<div class="contact-card">${inner}</div>`;
  }).join('');

  $('#form-whatsapp').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = $('#f-nombre').value.trim();
    const asunto = $('#f-asunto').value.trim();
    const mensaje = $('#f-mensaje').value.trim();
    const num = D.config.whatsapp;
    const body = `Hola ${D.perfil.nombre.split(' ')[0]}, soy ${nombre || '(sin nombre)'}.\n\nAsunto: ${asunto || 'Consulta'}\n\n${mensaje || ''}`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(body)}`, '_blank');
  });

  /* ---------- Animación reveal al hacer scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
    // Respaldo: mostrar todo pasados 1.6 s por si algo queda fuera de vista.
    setTimeout(() => reveals.forEach((el) => el.classList.add('visible')), 1600);
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- Resaltar sección activa en el menú ---------- */
  if ('IntersectionObserver' in window) {
    const nav = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          document.querySelectorAll('[data-nav]').forEach((a) =>
            a.classList.toggle('active', a.dataset.nav === en.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach((s) => nav.observe(s));
  }
})();
