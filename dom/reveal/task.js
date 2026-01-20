
const elements = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
    let viewportHeight = window.innerHeight;
    let filteredEl = elements.filter((el) =>
        el.getBoundingClientRect().top < viewportHeight);

    filteredEl.forEach((el) => {
        if (!el.classList.contains('reveal_active')) {
            el.classList.add('reveal_active');
        }
    })
})
    
