let randomNumber = (parseInt(Math.random()*100+1));

const inputUser = document.querySelector('.input');
const message = document.querySelector('.message')
const submit = document.querySelector('#sub');
const previousGuess = document.querySelector('.GuesseOne');
const remainingGuess = document.querySelector('.GuesseTwo')
const lowOrHigh = document.querySelector('.lowOrHigh');
const result = document.querySelector('.result');
const newMessage = document.querySelector('.newGameMessage'); 

const p = document.createElement('p');
let prevGuess = [];
let remGuess = 1;
let isGame = true;
if(isGame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
       const guess=  parseInt(inputUser.value)
      validateGuess(guess)
         
    })
}


function validateGuess(guess){
 if(isNaN(guess)){
   alert('Enter a valid number')
 }else if(guess<1 || guess>100){
    alert('Enter a valid number')
 }else {
    prevGuess.push(guess);
    if(remGuess>10){
        displayMessage(`Game over. Random number was ${randomNumber}`)
        //  testGuess(guess);
         gameOver();
    }else{
        checkGuess(guess)
        testGuess(guess)
    }
 }

}

function checkGuess(guess){
    if(guess===randomNumber){
       displayMessage('Yes you got it Right','green')
       gameOver();
    }else if(guess>randomNumber){
        displayMessage('Too high! Try Again ' , 'red')

    }else {
        displayMessage('Too low ! Try Again','red');
    }

}
function testGuess(guess){
    inputUser.value = ''
    previousGuess.innerHTML  += ` ${guess}`;
  
    remGuess++;
    remainingGuess.innerHTML = `${11- remGuess}`
 }
 
function displayMessage(message, color){
  
result.innerHTML = `${message}`
result.style.color = color;
}


function gameOver(){
    inputUser.value ='';
    inputUser.setAttribute('disabled','true');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Click to start new Game</h2>`;
    newMessage.appendChild(p);
    isGame = false;
    startGame();
}

function startGame(){
    const newGameButton =document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random()*100 +1));
        prevGuess =[];
        remGuess =1;
        result.innerHTML = '';
        remainingGuess.innerHTML = `${11- remGuess}`;
        previousGuess.innerHTML = '';
        inputUser.removeAttribute('disabled');
        newMessage.removeChild(p);
        isGame =true;
    },{once: true });

}

