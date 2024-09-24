const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) =>
  accordion.addEventListener('click', (event) => {
    const panel = accordion.querySelector('.accordion__panel');
    const isToggler = event.target.classList.contains('accordion__main')
    if (panel && isToggler) {
      event.currentTarget.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }
  })
);
