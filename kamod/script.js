const toggleSwitch = document.querySelector('.toggle-switch');
const toggleCircle = document.querySelector('.toggle-circle');

toggleSwitch.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const isChecked = document.body.classList.contains('dark-mode');
  if (isChecked) {
    toggleCircle.style.transform = 'translateY(100%)';
  } else {
    toggleCircle.style.transform = 'translateY(0)';
  }
});