// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Pronto te contactaremos.');
    form.reset();
  });
});
