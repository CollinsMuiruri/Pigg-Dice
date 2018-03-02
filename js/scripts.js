$(document).ready(function) {
  function diceRoll() {
    var dice1 = getElementById("dice1")
    var status =getElementById("status")
    var d1 = Math.floor(Math.random() * + 6) + 1;
    var diceTotal = d1 
    dice1.innerHTML=dice1
    status.innerHTML+="WOW"
  }
}
