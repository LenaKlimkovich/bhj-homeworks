const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fileInput = document.getElementById('file');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    }
    xhr.send(formData);
    xhr.onload = () => {
        progress.value = 1;
        setTimeout(() => {
            progress.value = 0;
        }, 700);
    };

})
    
