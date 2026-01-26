
const elements = Array.from(document.querySelectorAll('.has-tooltip'));


elements.forEach(el => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    el.insertAdjacentElement('afterend', tooltip);
    tooltip.textContent = el.title;


    el.addEventListener('click', (e) => {
    e.preventDefault();
    const position = el.getBoundingClientRect(); 
    tooltip.style.left = position.left + 'px';
    tooltip.style.top = position.bottom + 'px';
    const tooltips = document.querySelectorAll('.tooltip')
    tooltips.forEach(t => {
          if (t.classList.contains('tooltip_active')) {
            t.classList.remove('tooltip_active');
            return
        }
    })
    tooltip.classList.add("tooltip_active");
})

})



