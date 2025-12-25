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
        if(secondsLeft === 0) {
           minutesLeft--; 
            minutes.textContent = minutesLeft;
              seconds.textContent = 59;
         secondsLeft--;
        seconds.textContent = secondsLeft;
        }
      

        if (secondsLeft === 0 && minutesLeft === 0 && hoursLeft === 0) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        }
    }, 1000);

}

countdown();