window.addEventListener('DOMContentLoaded', () => {
  const bloque = document.getElementById('bloque-movible');
  let x = 100, y = 100;
  const paso = 10;

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowUp':    y -= paso; break;
      case 'ArrowDown':  y += paso; break;
      case 'ArrowLeft':  x -= paso; break;
      case 'ArrowRight': x += paso; break;
      default: return;
    }
    bloque.style.left = x + 'px';
    bloque.style.top = y + 'px';
  });
});
