
const elements = Array.from(document.querySelectorAll('.has-tooltip'));

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);
tooltip.textContent = null;

elements.forEach(el => {

    el.addEventListener('click', (e) => {
        e.preventDefault();

        if (el.title === tooltip.textContent) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            el.insertAdjacentElement('afterend', tooltip);
            tooltip.textContent = el.title;

            tooltip.classList.add("tooltip_active");
            const position = el.getBoundingClientRect();
            tooltip.style.left = position.left + 'px';
            tooltip.style.top = position.bottom + 'px';
        }
    })
})