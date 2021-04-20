// initialize game variables

let min = 1,
    max = 10,
    winningCondition = 2,
    guessLeft = 3;

// Get UI Elements

const   gameDiv = document.querySelector('#game'),
        minValue = document.querySelector('.min-num'),
        maxValue = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');
        

guessBtn.addEventListener('click',function(){
    // convert the String to the Number
    let guess = parseInt(guessInput.value);
    
    // validation 
    if(isNaN(guess) || guess < min || guess > max){
        showMessage(`Please input the number between ${min} and ${max}`,'red');
    }

    // Check if win or lose
    if(guess === winningCondition) {
        guessInput.disabled = true;
        showMessage(`${guess} is correct, YOU WIN !!!!!`,'green');
        guessInput.style.borderColor = 'green';
    }else {

    }
});

// Error Message
function showMessage(msg,colour){
    message.style.color = colour;
    message.textContent = msg;
}







