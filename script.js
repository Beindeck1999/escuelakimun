// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
  });
}

console.log("Sitio de Escuela Kimün cargado correctamente.");
