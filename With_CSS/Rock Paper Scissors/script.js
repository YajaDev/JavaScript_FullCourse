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
    computerPicked = item[Math.floor(Math.random() * item.length)];
}

function displayScore(){
    document.querySelector('#js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(pick){
    userPicked = pick

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
    console.log(JSON.parse(localStorage.getItem('score')));
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    displayScore();
    console.log(JSON.parse(localStorage.getItem('score')));
}