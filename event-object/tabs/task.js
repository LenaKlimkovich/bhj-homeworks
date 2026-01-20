
const tabsBlocks = Array.from(document.querySelectorAll('.tabs'));

tabsBlocks.forEach((b) => {
    const activeTab = b.querySelector('.tab_active');
    const tabs = Array.from(b.querySelectorAll('.tab'));
    let activeIndex = tabs.indexOf(activeTab);
    const contents = Array.from(b.querySelectorAll('.tab__content'));
    b.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    let newIndex = tabs.indexOf(tab)
    tabs.forEach(t =>
        t.classList.remove('tab_active'));
    tab.classList.add('tab_active');
    contents[activeIndex].classList.remove('tab__content_active');
    contents[newIndex].classList.add('tab__content_active');
    activeIndex = newIndex;
});
});


