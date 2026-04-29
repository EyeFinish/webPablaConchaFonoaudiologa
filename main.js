/* ═══════════════════════════════════════════
   MAIN.JS — Landing Pabla Andrea Concha
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL ───
  const navbar = document.getElementById('navbar');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ─── MOBILE NAV TOGGLE ───
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  const navClose = document.getElementById('navClose');
  if (navClose) {
    navClose.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  }

  // Cerrar menú al hacer click en un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ─── HERO FADE-UP ON LOAD ───
  const heroElements = document.querySelectorAll('.hero .fade-up');
  setTimeout(() => {
    heroElements.forEach(el => el.classList.add('visible'));
  }, 200);

  // ─── SCROLL REVEAL (INTERSECTION OBSERVER) ───
  const revealTargets = document.querySelectorAll(
    '.section-tag, .section-title, .about-text p, .service-card, .audience-list li, .why-item, .result-text, .cta-title, .cta-text, .btn-lg, .cta-limited, .about-card, .audience-card, .about-visual'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealTargets.forEach(el => observer.observe(el));

  // ─── STICKY CTA (MÓVIL) ───
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');

  if (stickyCta) {
    const stickyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          stickyCta.classList.add('visible');
        } else {
          stickyCta.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    stickyObserver.observe(heroSection);
  }

  // ─── SMOOTH SCROLL PARA LINKS INTERNOS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
