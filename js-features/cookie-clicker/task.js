const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
let clicker_number = Number(clicker__counter.textContent);
const clicker__speed = document.getElementById("clicker__speed");
let clicker_speed = Number(clicker__speed.textContent);
let currentTime = new Date().getSeconds();

  cookie.onclick = function() {
    clicker_number++;
    let time = new Date().getSeconds();
    clicker__counter.textContent = clicker_number;
    cookie.width = 400;
   if(clicker_number % 2 === 0){
       cookie.width = 250;
   } else {
     cookie.width = 200;
   }
let difference = time - currentTime;
clicker__speed.textContent = 1/ difference;

  }

