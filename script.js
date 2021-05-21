"use strict";
//1. generate array of numbers from 1 to 59

let lotteryNumbers = [];

for (let i = 1; i < 60; i++) {
  lotteryNumbers.push(i);
}
console.log(lotteryNumbers);

//2. Shuffle the array in random order
//The Fisher-Yates Algorithm:  looping through the array (from the end to the start) and picking a random item from the array and swapping it with the item in the current iteration.
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(lotteryNumbers);
console.log(lotteryNumbers);

//push the first 6 to new array and sort

//3. Push the first 6 numbers to display
document.querySelector("#number1").textContent = lotteryNumbers[0];
document.querySelector("#number2").textContent = lotteryNumbers[1];
document.querySelector("#number3").textContent = lotteryNumbers[2];
document.querySelector("#number4").textContent = lotteryNumbers[3];
document.querySelector("#number5").textContent = lotteryNumbers[4];
document.querySelector("#number6").textContent = lotteryNumbers[5];

//reload screen on clicking Play
document.querySelector(".playButton").addEventListener("click", function () {
  location.reload();
});
//refresh button sets numbers to ?
document.querySelector(".refreshButton").addEventListener("click", function () {
  document.querySelector("#number1").textContent = "?";
  document.querySelector("#number2").textContent = "?";
  document.querySelector("#number3").textContent = "?";
  document.querySelector("#number4").textContent = "?";
  document.querySelector("#number5").textContent = "?";
  document.querySelector("#number6").textContent = "?";
});
