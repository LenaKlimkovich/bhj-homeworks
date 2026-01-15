const tabs = Array.from(document.querySelectorAll('.tab'));
let activeTab = document.querySelector('.tab_active');
let activeIndex = tabs.indexOf(activeTab)
const contents = Array.from(document.querySelectorAll('.tab__content'));


document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    let newIndex = tabs.indexOf(tab)
    tabs.forEach(t =>
        t.classList.remove('tab_active'));
    tab.classList.add('tab_active');
    contents[activeIndex].classList.remove('tab__content_active');
    contents[newIndex].classList.add('tab__content_active')
    activeIndex = newIndex;
});



