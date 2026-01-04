// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    }
  });
});

// Light/Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️' ;
});
function toggleContact(card) {
  const info = card.querySelector('.contact-info');
  info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

