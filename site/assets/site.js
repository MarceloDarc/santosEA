/* Santos Estética Automotiva — comportamentos das páginas de serviço
   (ppf.html, vitrificacao.html). O index.html tem o próprio script inline. */

// topo sólido ao rolar
(function () {
  const h = document.querySelector('header');
  if (!h) return;
  addEventListener('scroll', () => h.classList.toggle('solido', scrollY > 60), { passive: true });
})();

// lightbox da galeria — clique amplia, setas navegam, Esc fecha
(function () {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const conta = document.getElementById('lightboxConta');
  const galeria = document.querySelector('.galeria.clicavel');
  if (!lb || !img || !galeria) return;

  const fotos = Array.from(galeria.querySelectorAll('img'));
  if (!fotos.length) return;
  let atual = 0;

  const mostra = i => {
    atual = (i + fotos.length) % fotos.length;
    const foto = fotos[atual];
    img.src = foto.src;
    img.alt = foto.alt || '';
    if (conta) conta.textContent = `${atual + 1} / ${fotos.length}`;
  };

  const abre = i => {
    mostra(i);
    lb.classList.add('aberto');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const fecha = () => {
    lb.classList.remove('aberto');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.src = '';
  };

  fotos.forEach((foto, i) => {
    foto.parentElement.addEventListener('click', () => abre(i));
  });

  lb.querySelector('[data-lb-fechar]')?.addEventListener('click', fecha);
  lb.querySelector('[data-lb-ant]')?.addEventListener('click', e => { e.stopPropagation(); mostra(atual - 1); });
  lb.querySelector('[data-lb-prox]')?.addEventListener('click', e => { e.stopPropagation(); mostra(atual + 1); });
  // clique no fundo (fora da foto e dos botões) fecha
  lb.addEventListener('click', e => { if (e.target === lb) fecha(); });

  addEventListener('keydown', e => {
    if (!lb.classList.contains('aberto')) return;
    if (e.key === 'Escape') fecha();
    if (e.key === 'ArrowLeft') mostra(atual - 1);
    if (e.key === 'ArrowRight') mostra(atual + 1);
  });
})();
