let result = '';
let userPicked;
let computerPicked;
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//display after refresh
displayScore();

function pickRandomItem(){
    const item = ['Paper','scissor','Rock'];
    return item[Math.floor(Math.random() * item.length)];
}

function displayScore(){
    document.querySelector('#js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

document.querySelector('#rock-btn')
    .addEventListener('click', () => {
        playGame('Rock')
    })

document.querySelector('#paper-btn')
    .addEventListener('click', () => {
        playGame('Paper')
    })

document.querySelector('#scissor-btn')
    .addEventListener('click', () => {
        playGame('Scissor')
    });

document.querySelector('.reset-btn')
    .addEventListener('click', () => {
        showResetConfirmation();
    });

document.querySelector('.autoPlay-btn')
    .addEventListener('click', () => {
        autoPlay();
    });

document.body.addEventListener('keydown', (event) => {    
    if (event.key === 'r') {
        playGame('Rock')
    } else if (event.key === 's') {
        playGame('Scissor')
    } else if (event.key === 'p') {
        playGame('Paper')   
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        showResetConfirmation();
    }
});

function playGame(pick){
    userPicked = pick
    computerPicked = pickRandomItem();

    if (computerPicked === userPicked){
        result = 'Tie!';
        score.ties += 1;
    }else if((userPicked === 'Paper' && computerPicked === 'Rock') ||
        (userPicked === 'scissor' && computerPicked === 'Paper') ||
        (userPicked === 'Rock' && computerPicked === 'scissor')){
        result = 'You Win!';
        score.wins += 1;
    } else {
        result =  "You Lose!";
        score.losses += 1
    }

    localStorage.setItem('score', JSON.stringify(score));

    //display to html
    document.querySelector('#js-moves').innerHTML = `
    You 
    <img src="images/${pick}-emoji.png" alt="${pick}" class="move-icon"> 
    <img src="images/${computerPicked}-emoji.png" alt="${computerPicked}" class="move-icon"> 
    Computer`;
    document.querySelector('#js-result').innerText = result;

    displayScore();

    //check score on console
    console.log(JSON.parse(localStorage.getItem('score')));
}

function showResetConfirmation() {
    document.getElementById('reset_msg_container').innerHTML =`
    <p>Are you sure you want to reset the score?</p>
    <button id="yes-btn" class="reset-mgs-btn">Yes</button>
    <button id="no-btn" class="reset-mgs-btn">No</button>
    `;

    document.querySelector('#yes-btn').addEventListener('click',() => {
        resetScore();
        hideResetConfirmation();
    });

    document.querySelector('#no-btn').addEventListener('click',() => {
        hideResetConfirmation();
    });
}

function hideResetConfirmation() {
    document.getElementById('reset_msg_container').innerHTML = '';
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    displayScore();
    console.log(JSON.parse(localStorage.getItem('score')));
}

let isAutoPlay = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(function () {
            userPicked = pickRandomItem();
            playGame(userPicked);
        }, 1200);
        document.querySelector('.autoPlay-btn').innerText = 'Stop Playing';
        isAutoPlay = true;
    }else {
        clearInterval(intervalId);
        document.querySelector('.autoPlay-btn').innerText = 'Auto Play';
        isAutoPlay = false;
    }
}