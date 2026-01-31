const request = new XMLHttpRequest();
const title = document.getElementById("poll__title");
const answerDiv = document.getElementById("poll__answers");

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        const poll = JSON.parse(request.responseText);
        const id = JSON.parse(request.responseText).id;
        const data = poll.data;

        title.textContent = data.title;
        data.answers.forEach((a, index) => {
            answerDiv.insertAdjacentHTML('beforeend', `
                <button class="poll__answer" data-index="${index}">
                    ${a}
                </button>
            `);
        });

        const btns = document.querySelectorAll('.poll__answer');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {

                alert('Спасибо, ваш голос засчитан!');
                answerDiv.innerHTML = '';
                const answerIndex = btn.dataset.index;

                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                xhr.addEventListener('load', () => {
                    const stats = JSON.parse(xhr.responseText);
                    const results = stats.stat
                    results.forEach((r) => {
                        const percent = (r.votes / 10).toFixed(2);
                        answerDiv.insertAdjacentHTML('beforeend', `
                     <div>${r.answer}: ${percent}%</div> `);
                    })
                });
                xhr.send(`vote=${id}&answer=${answerIndex}`);
            });
        });
    }
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();