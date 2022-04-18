// get access to global elements
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')

let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll')

let current1 = document.getElementById('current--0')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')

// intitialize the values to 0
score0.textContent = 0
score1.textContent = 0

let scores = [0, 0]
let current = 0
let activePlayer = 0

// scores[activePlayer]

dice.classList.add('hidden');

// implement rollDice button functionality
rollDice.addEventListener('click', function() {
    // 1. generatae random no. (1 to 6)
    let dicenum = Math.floor(Math.random() * 6) + 1
    console.log(dicenum)

    // 2. display image with random no.
    dice.classList.remove('hidden');
    dice.src = `images/${dicenum}.png`

    // 3. if no. is not one, add it to current players current score
    if (dicenum != 1) {
        current += dicenum
        document.getElementById(`current--${activePlayer}`).textContent = current
            // current1.textContent = current
    } else {
        current = 0
        document.getElementById(`current--${activePlayer}`).textContent = current
        activePlayer = activePlayer == 0 ? 1 : 0
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
    }
    // 4. if no. is 1 set current score of current player to 0 and change the active player

})