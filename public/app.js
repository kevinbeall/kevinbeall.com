const projectOverlays = document.querySelectorAll('.project-overlay');

projectOverlays.forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
  }, { once: true })
  overlay.addEventListener('mouseover', (e) => {
    overlay.classList.add('active');
  })
  overlay.addEventListener('mouseout', (e) => {
    overlay.classList.remove('active');
  })
})