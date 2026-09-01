document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobile-menu');
  const nav = document.getElementById('primary-nav') || document.querySelector('.nav-links');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('active');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.getElementById('pest-quote-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get('nombre') || '';
      const phone = data.get('telefono') || '';
      const pest = data.get('plaga') || 'No especificada';
      const location = data.get('ubicacion') || 'No especificada';
      const message = data.get('mensaje') || '';
      const text = encodeURIComponent('Hola kill-iAn, quiero solicitar una cotización.\n\nNombre: ' + name + '\nTeléfono: ' + phone + '\nPlaga: ' + pest + '\nUbicación: ' + location + '\nDetalles: ' + message);
      window.open('https://wa.me/18294415959?text=' + text, '_blank', 'noopener');
    });
  }
});
