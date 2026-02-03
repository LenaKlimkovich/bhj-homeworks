const textArea = document.getElementById('editor');
textArea.value = '' || localStorage.getItem('letter');
const btn = document.getElementById('delete');


textArea.addEventListener('input', () => {
    localStorage.setItem('letter', textArea.value);
});


btn.addEventListener('click', () => {
    textArea.value = '';
    localStorage.clear();
})