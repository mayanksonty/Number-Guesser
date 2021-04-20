// initialize game variables

let min = 1,
    max = 10,
    winningCondition = getRandomNum(min,max),
    guessLeft = 3;

// Get UI Elements

const   gameDiv = document.querySelector('#game'),
        minValue = document.querySelector('.min-num'),
        maxValue = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');
 
// Event Listner on the game which delegate the listner to the button
/* mousedown is used instead of click so 
that if we hit the submit button it automatically reloaded it */
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',function(){
    // convert the String to the Number
    let guess = parseInt(guessInput.value);
    
    // validation 
    // if(isNaN(guess) || guess < min || guess > max){
    //     showMessage(`Please input the number between ${min} and ${max}`,'red');
    // }

    // Check if win or lose
    if(guess === winningCondition) {
        guessInput.disabled = true;
        gameOver(`${guess} is correct, YOU WIN !!!!!`,'green');
    }else {
        // Validation
        if(isNaN(guess) || guess < min || guess > max){
            showMessage(`Please input the number between ${min} and ${max}`,'red');
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
        }else{
            guessLeft = guessLeft - 1;
            if(guessLeft <= 0){
                guessInput.disabled = true;
                gameOver(`Game Over You LOST Correct Number is ${winningCondition}`, 'red');
            }else {
                showMessage(`You have only ${guessLeft} Guess Left!`,'red');
                guessInput.style.borderColor = 'red';
                guessInput.value = '';
            }  
        }
    }
});
// game over
function gameOver(msg,colour){
    guessInput.style.borderColor = colour
    showMessage(msg,colour);
    
    showPlayBtn();
}

// Error Message
function showMessage(msg,colour){
    message.style.color = colour;
    message.textContent = msg;
}

// show play again btn
function showPlayBtn(){
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

// Generate Random Number
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}





