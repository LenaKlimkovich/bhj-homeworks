
const dropdowns = document.querySelectorAll(".dropdown");


dropdowns.forEach((dropdown) => {
    const value = dropdown.querySelector(".dropdown__value");
    const list = dropdown.querySelector(".dropdown__list");

    function rollList(e) {
        const item = e.target.closest(".dropdown__item");
        e.preventDefault();
        value.textContent = item.textContent;
        list.classList.remove("dropdown__list_active");
    }

    function unrollList() {
        list.classList.toggle("dropdown__list_active");
    }

    value.addEventListener("click", unrollList);
    list.addEventListener("click", rollList);
});
