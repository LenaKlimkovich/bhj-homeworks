 getHole = index => document.getElementById(`hole${index}`);
 const dead = document.getElementById(`dead`);
 const lost = document.getElementById(`lost`);

 let countDead = 0;
 let countLost = 0;
 for (let index = 1; index < 9; index++) {
     getHole(index).onclick = function() {
         if (getHole(index).classList.contains('hole_has-mole')) {
             countDead += 1;
             dead.textContent = countDead;
         } else {
             countLost += 1;
             lost.textContent = countLost;
         }

         if (countDead === 10) {
             alert("Победа!");
             countDead = 0;
             countLost = 0;
             dead.textContent = countDead;
             lost.textContent = countLost;
         }
         if (countLost === 5) {
             alert("Вы проиграли!");
             countDead = 0;
             countLost = 0;
             dead.textContent = countDead;
             lost.textContent = countLost;
         }
     }
 }

