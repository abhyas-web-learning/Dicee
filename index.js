var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2)
    var message = "Player 1 wins"
else if (randomNumber1 < randomNumber2)
    var message = "Player 2 wins"
else 
    var message = "Draw game"
document.querySelector("h1").textContent = message;