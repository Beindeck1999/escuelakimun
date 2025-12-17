// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  const navInteractiveItems = mainNav.querySelectorAll('a, button');

  const updateMenuState = (isOpen) => {
    mainNav.classList.toggle('nav-open', isOpen);
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen.toString());
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };

  const closeMenuOnMobile = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      updateMenuState(false);
    }
  };

  navToggle.addEventListener('click', () => {
    const isOpen = !mainNav.classList.contains('nav-open');
    updateMenuState(isOpen);
  });

  navInteractiveItems.forEach((item) => {
    item.addEventListener('click', closeMenuOnMobile);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('nav-open')) {
      updateMenuState(false);
    }
  });
}

console.log("Sitio de Escuela Kimün cargado correctamente.");
