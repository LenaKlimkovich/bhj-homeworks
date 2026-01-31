const loader = document.getElementById('loader');
const items = document.getElementById('items');
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if (request.readyState === request.DONE) {
        loader.classList.remove('loader_active');
        const response = JSON.parse(request.responseText).response.Valute;
        for (let key in response) {
            const currency = response[key];

            items.insertAdjacentHTML('beforeend', `
        <div class="item">
         <div class="item__code">${currency.CharCode}</div> 
         <div class="item__value">${currency.Value}</div> 
         <div class="item__currency">руб.</div> 
        </div>`);


        }
    }
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();