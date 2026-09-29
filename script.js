(() => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  const hero = document.querySelector('.hero');

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Estado del nav: transparente sobre el hero, sólido al scroll
  const updateNavState = () => {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    if (window.scrollY > 30) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
    if (heroBottom > 80) {
      nav.classList.add('is-hero');
    } else {
      nav.classList.remove('is-hero');
    }
  };
  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive: true });

  // Parallax del hero — la imagen se mueve más lento que el scroll
  const heroImg = document.querySelector('.hero__media img');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroImg && !prefersReduced) {
    let ticking = false;
    let heroVisible = true;

    const applyParallax = () => {
      const y = window.scrollY;
      const heroH = hero.offsetHeight;
      heroVisible = y < heroH;
      if (heroVisible) {
        const offset = y * 0.35;
        heroImg.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(applyParallax);
        ticking = true;
      }
    }, { passive: true });

    applyParallax();
  }

  // Menú móvil
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    mobile.hidden = !open;
  });

  // Cerrar móvil al hacer clic en un link
  mobile?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    });
  });

  // Reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.section__head, .service-card, .about__media, .about__text, .t-card, .gallery__item, .contact__info, .contact__map'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }
})();
