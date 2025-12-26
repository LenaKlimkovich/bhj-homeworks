const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
let clicker_number = 0;
let clicker__speed = document.getElementById("clicker__speed");
let clicker_speed = 0;
let startTime = null;

cookie.onclick = function() {
    clicker_number++;
    clicker__counter.textContent = clicker_number;
    const now = new Date();
    if (clicker_number % 2 === 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
    if (startTime === null) {
        clicker_speed = 0;
    } else {
        let difference = (now - startTime) / 1000;
        clicker_speed = 1 / difference;
        clicker__speed.textContent = clicker_speed.toFixed(2);

    }
    startTime = now;
}