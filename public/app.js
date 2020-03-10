const projectOverlays = document.querySelectorAll('.project-overlay');
const projectTitles = document.querySelectorAll('.title-rect');
const extraInfo = document.querySelectorAll('.extra-info');

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

projectTitles.forEach(title => {
  title.addEventListener('click', e => {
    title.lastElementChild.classList.toggle('anim-helper');
    title.lastElementChild.classList.toggle('hidden');
  })
})