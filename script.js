function toggleLights() {
  const lights = document.querySelectorAll('.light');
  lights.forEach(light => {
    const isBlinking = light.style.animation;
    light.style.animation = isBlinking ? '' : 'blink 1s infinite alternate';
  });
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}