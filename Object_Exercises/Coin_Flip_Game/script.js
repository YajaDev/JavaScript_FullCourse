const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0
    }
;
console.log(score);


function playGame(guess) {
    //pick random number
    const randomNum = Math.random();
    
    //decide if it's heads or tails
    const coin = randomNum > 0.5 ? 'heads' : 'tails';

    //result
    if (guess === coin) {
        console.log('You win!');
        score.wins += 1 
    } else {
        console.log('You lose!');
        score.losses += 1
    }

    //save to local storage the score
    localStorage.setItem('score', JSON.stringify(score))
    console.log(score);
    
}

function clearScore() {
    localStorage.removeItem('score');
    console.log('reset score!');
    score.wins = 0;
    score.losses = 0;
    console.log(score);
    
}


