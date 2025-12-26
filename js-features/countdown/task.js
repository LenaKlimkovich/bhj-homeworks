const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
let secondsLeft = Number(seconds.textContent);
let minutesLeft = Number(minutes.textContent);
let hoursLeft = Number(hours.textContent);

function countdown() {

    let timerId = setInterval(() => {
        secondsLeft--;
        seconds.textContent = secondsLeft;

        if (secondsLeft === 00 && minutesLeft === 00 && hoursLeft === 00) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        }

        if (secondsLeft === 00 && minutesLeft !== 00) {
            minutesLeft--;
            minutes.textContent = minutesLeft;
            secondsLeft = 60;
            seconds.textContent = secondsLeft;
            secondsLeft--;
            seconds.textContent = secondsLeft;
        }

        if (minutesLeft === 00 && secondsLeft === 00 && hoursLeft !== 00) {
            hoursLeft--;
            hours.textContent = hoursLeft;
            minutesLeft = 60;
            minutes.textContent = minutesLeft;
            minutesLeft--;
            minutes.textContent = minutesLeft;
            secondsLeft = 60;
            seconds.textContent = secondsLeft;
            secondsLeft--;
            seconds.textContent = secondsLeft;
        }
        if (hoursLeft < 10) {
            hours.textContent = '0' + hoursLeft;
        }
        if (minutesLeft < 10) {
            minutes.textContent = '0' + minutesLeft;
        }
        if (secondsLeft < 10) {
            seconds.textContent = '0' + secondsLeft;
        }
    }, 1000);

}

countdown();