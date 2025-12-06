
let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let output = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
let imagePick = output[randomNumber1 - 1];
let firstDice = document.querySelector("img").setAttribute("src", imagePick);
console.log(imagePick);



let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

let output2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
let imagePick2 = output2[randomNumber2 - 1];
let secondDice = document.querySelectorAll("img")[1].setAttribute("src", imagePick2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
 } 
