
const bookControl = document.querySelector('.book__control');
const fontSizes = Array.from(bookControl.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book__content');
const bookColor = document.querySelector('.book__control_color');
const fontColors = Array.from(bookColor.querySelectorAll('.color'));
const bookBg = document.querySelector('.book__control_background');
const bgColors = Array.from(bookBg.querySelectorAll('.color'));

bookControl.addEventListener("click", (e) => {
    e.preventDefault();
    const active = e.target.closest('.font-size');

    if (!active) return;
    fontSizes.forEach((f) => f.classList.remove('font-size_active'));
    active.classList.add('font-size_active');
    bookContent.classList.remove('book_fs-small', 'book_fs-big');
    if (active.classList.contains("font-size_small")) {
        bookContent.classList.add("book_fs-small")
    }
    if (active.classList.contains("font-size_big")) {
        bookContent.classList.add("book_fs-big")
    }
})

bookColor.addEventListener("click", (e) => {

    e.preventDefault();
    const active = e.target.closest('.color');

    if (!active) return;
    fontColors.forEach((f) => f.classList.remove('color_active'));
    active.classList.add('color_active');
    bookContent.classList.remove('book_color-gray', 'book_color-whitesmoke');
    if (active.classList.contains("text_color_gray")) {
        bookContent.classList.add("book_color-gray")
    }
    if (active.classList.contains("text_color_whitesmoke")) {
        bookContent.classList.add("book_color-whitesmoke")
    }
})

bookBg.addEventListener("click", (e) => {
    e.preventDefault();
    const active = e.target.closest('.color');

    if (!active) return;
    bgColors.forEach((b) => b.classList.remove('color_active'));
    active.classList.add('color_active');
    bookContent.classList.remove('book_bg-gray', 'book_bg-black');
    if (active.classList.contains("bg_color_black")) {
        bookContent.classList.add("book_bg-black")
    }
    if (active.classList.contains("bg_color_gray")) {
        bookContent.classList.add("book_bg-gray")
    }
})