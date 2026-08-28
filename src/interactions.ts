function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

function initHeader() {
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initNav() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const nav = document.querySelector<HTMLElement>('.mobile-nav');
  if (!toggle || !nav) return;
  const close = () => {
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    nav.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function initGallery() {
  const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
  const figures = document.querySelectorAll<HTMLElement>('[data-lightbox]');
  const closeBtn = document.querySelector<HTMLButtonElement>('.lightbox__close');
  if (!dialog || !figures.length) return;
  const places = dialog.querySelectorAll<HTMLElement>('.lightbox__img');
  const title = dialog.querySelector<HTMLElement>('.lightbox__title');
  const counter = dialog.querySelector<HTMLElement>('.lightbox__count');
  let current = 0;
  const total = figures.length;

  const show = (i: number) => {
    current = (i + total) % total;
    places.forEach((p, j) => {
      const fig = figures[current];
      const full = fig.querySelector('img')!.dataset.full!;
      const cap = fig.querySelector('figcaption')?.textContent ?? '';
      const img = p.querySelector('img')!;
      img.src = full;
      img.alt = (fig.querySelector('img')!.alt || 'Gallery image');
      p.hidden = j !== current;
      title && (title.textContent = cap);
    });
    counter && (counter.textContent = `${current + 1} / ${total}`);
  };

  const open = (i: number) => {
    show(i);
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  };

  figures.forEach((fig, i) => {
    fig.querySelector('button')?.addEventListener('click', () => open(i));
  });
  closeBtn?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', (e) => {
    if (!dialog.open) return;
    if (e.key === 'Escape') dialog.close();
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
  });
}

function initReserve() {
  const form = document.querySelector<HTMLFormElement>('.reserve-form');
  if (!form) return;
  const success = document.querySelector<HTMLElement>('.reserve-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.hidden = true;
    success!.hidden = false;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeader();
  initNav();
  initGallery();
  initReserve();
});