// get access to global elements
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')

let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll')
let holdBtn = document.querySelector('.btn--hold')
let newGameBtn = document.querySelector('.btn--new')

let current1 = document.getElementById('current--0')
let current2 = document.getElementById('current--1')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let name1 = document.getElementById('name--0')
let name2 = document.getElementById('name--1')

let scores
let current
let activePlayer

// initializing function
function init() {
    score0.textContent = 0
    score1.textContent = 0
    current1.textContent = 0
    current2.textContent = 0

    name1.textContent = "Player 1"
    name2.textContent = "Player 2"
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    rollDice.classList.remove('hidden')
    holdBtn.classList.remove('hidden')
    dice.classList.add('hidden');


    scores = [0, 0]
    current = 0
    activePlayer = 0
}
init()
    // switchPlayer function
function switchPlayer() {
    current = 0
    document.getElementById(`current--${activePlayer}`).textContent = current
    activePlayer = activePlayer == 0 ? 1 : 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}
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
        switchPlayer()

    }
    // 4. if no. is 1 set current score of current player to 0 and change the active player

})

// implement hold functionality
holdBtn.addEventListener('click', function() {
    // 1. add score current to global score
    scores[activePlayer] += current
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    //2. check if global >= 100(max score)
    if (scores[activePlayer] >= 20) {
        // finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.getElementById(`name--${activePlayer}`).textContent = 'Winner!'
            // hide dice image and playing buttons
        dice.classList.add('hidden')
        rollDice.classList.add('hidden')
        holdBtn.classList.add('hidden')
    } else {
        switchPlayer()
    }
})

// Start a new game
newGameBtn.addEventListener('click', init)