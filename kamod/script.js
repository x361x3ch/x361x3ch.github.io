const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.classList.toggle('dark-mode');
  const themeToggleCircle = document.querySelector('#theme-toggle-circle');
  themeToggleCircle.style.left = themeToggleCircle.style.left === '2.5px' ? '32.5px' : '2.5px';
});