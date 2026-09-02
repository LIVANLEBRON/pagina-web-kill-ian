document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const button = document.querySelector('.menu-button');
  if (nav && button) button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.textContent = open ? '×' : '☰'; });
  if (document.querySelector('.floating-actions')) return;
  const actions = document.createElement('div');
  actions.className = 'floating-actions';
  actions.setAttribute('aria-label', 'Accesos de contacto');
  actions.innerHTML = '<a class="floating-action whatsapp-action" target="_blank" rel="noopener" href="https://wa.me/18294415959?text=Hola%20kill-iAn%2C%20necesito%20orientaci%C3%B3n%20para%20control%20de%20plagas." aria-label="Escribir por WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.1 17.3c-.2-.1-1.2-.6-1.4-.6-.2-.1-.4-.1-.5.1-.2.2-.6.6-.7.8-.1.1-.3.2-.5.1-1.3-.6-2.2-1.1-3-2.5-.2-.3.2-.3.6-1.1.1-.2 0-.4 0-.5l-.6-1.4c-.1-.4-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 2.9.6.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3zM16 4a12 12 0 0 0-10.3 18.2L4 28l6-1.6A12 12 0 1 0 16 4zm0 21.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.6 1 1-3.5-.2-.4A9.8 9.8 0 1 1 16 25.8z"/></svg></a><a class="floating-action call-action" href="tel:+18294415959" aria-label="Llamar a kill-iAn"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M24.7 20.5c-1.4 0-2.7-.2-4-.6a1.2 1.2 0 0 0-1.2.3l-2.5 1.9a18.4 18.4 0 0 1-7.1-7.1l1.9-2.5c.3-.3.4-.8.3-1.2-.4-1.3-.6-2.6-.6-4A1.3 1.3 0 0 0 10.2 6H6.3A1.3 1.3 0 0 0 5 7.3C5 18.2 13.8 27 24.7 27a1.3 1.3 0 0 0 1.3-1.3v-3.9a1.3 1.3 0 0 0-1.3-1.3z"/></svg></a>';
  document.body.append(actions);
  const footer = document.querySelector('footer');
  const lift = () => { const overlap = footer ? Math.max(0, innerHeight - footer.getBoundingClientRect().top) : 0; actions.style.bottom = `${20 + overlap}px`; };
  addEventListener('scroll', lift, { passive: true }); addEventListener('resize', lift); lift();
});
