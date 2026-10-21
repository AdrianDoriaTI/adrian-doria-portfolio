// Movimento do site, em um só lugar. Tudo é opcional: sem JS ou com movimento reduzido, o conteúdo já está visível.
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Revelar ao entrar na tela ([data-reveal] ganha .is-in)
const revelar = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      revelar.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -18% 0px', threshold: 0.2 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revelar.observe(el));

// Números que contam até o valor, uma vez
const contar = (el: HTMLElement) => {
  const alvo = Number(el.dataset.count);
  const inicio = performance.now();
  const dur = 1200;
  const passo = (t: number) => {
    const p = Math.min((t - inicio) / dur, 1);
    el.textContent = String(Math.round(alvo * (1 - Math.pow(1 - p, 4))));
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
};
if (!reduz) {
  const contadores = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        contar(e.target as HTMLElement);
        contadores.unobserve(e.target);
      }
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    el.textContent = '0';
    contadores.observe(el);
  });
}

// Paralaxe leve: [data-parallax="0.08"] desloca na rolagem, proporcional à distância do centro da tela
const amplo = matchMedia('(min-width: 768px)').matches;
if (!reduz && amplo) {
  const itens = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  let agendado = false;
  const atualizar = () => {
    agendado = false;
    const meio = innerHeight / 2;
    for (const el of itens) {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) continue;
      const d = r.top + r.height / 2 - meio;
      el.style.setProperty('--py', `${(-d * Number(el.dataset.parallax)).toFixed(1)}px`);
    }
  };
  addEventListener('scroll', () => {
    if (!agendado) { agendado = true; requestAnimationFrame(atualizar); }
  }, { passive: true });
  atualizar();
}

// Inclinação sutil sob o mouse ([data-tilt]), só com mouse de verdade
if (!reduz && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}
