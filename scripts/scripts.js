/* =====================================================
   ESPACIO ANTÜ AYÜN - Scripts del sitio
   ===================================================== */

/* ----- Reveal on scroll (animación al hacer scroll) ----- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ----- Reveal escalonado para el hero al cargar ----- */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('active'), i * 200);
  });
});

/* ----- Envío del formulario de contacto vía WhatsApp ----- */
function enviarFormulario(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value;

  if (!nombre || !email) {
    alert('Por favor completa al menos tu nombre y correo electrónico.');
    return;
  }

  const texto =
    `Hola, soy ${nombre}.%0A%0A` +
    `Me interesa: ${servicio}%0A%0A` +
    `${mensaje}%0A%0A` +
    `Contacto: ${email} ${telefono ? '/ ' + telefono : ''}`;

  window.open(`https://wa.me/56997042678?text=${texto}`, '_blank');
}

const btnEnviar = document.getElementById('btn-enviar');
if (btnEnviar) {
  btnEnviar.addEventListener('click', enviarFormulario);
}

/* ----- Menú hamburguesa para móvil ----- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });

  /* Cerrar el menú móvil al hacer click en un enlace */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
    });
  });
}
