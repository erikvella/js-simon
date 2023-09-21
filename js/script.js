// esercizio js-simon

// 1 creo 5 numeri random che vanno da 0 a 99
// 2 creo un timer di 5 secondi al termine del quale i miei numeri scompaiono
// 3 faccio inserire all'utente i 5 numeri tramite prompt
// 4 restituisco un messaggio in pagina che evidenzia quanti e quali numeri sono stati indovinati

// 1 genero 5 numeri random univoci e stampa
// 2 setTimeout per la chiusura della visualizzazione
// 3 setTimeout per il lancio dei prompt (verfica univocità numeri inseiriti)
// 4 confronto fra numeri inseriti e numeri generati
// 5 output risultato

// 1 
const btn = document.querySelector('button');
const totalNumbers = 5;
let randomNumbers = [];
const attesa = 3 ;
let userNumbers = [];

function init(){
randomNumbers = getRandomNumbers();

display.innerHTML = randomNumbers.join(', ')

btn.addEventListener('click' , start)
}

function start(){
  this.classList.add('d-none');
}

while(randomNumbers.length < totalNumbers){
  const randomNumber = getRandomNumbers(1 , 100);
  if(!randomNumbers.includes(randomNumber));
  randomNumbers.push(randomNumber);
}

display.innerHTML = randomNumbers.join(', ')

function getRandomNumbers(min , max){
  return Math.floor(Math.random() * (max -min + 1 ) + min)
}


setTimeout(resetDisplay, 5000)

setTimeout(insertNumbers , (attesa + 1)* 1000)

function resetDisplay(){
  display.innerHTML = '';
  message.innerHTML = 'Scrivi i numeri memorizzati'
}

function insertNumbers(tot){
  const numbers = [];
  let userNumber = parseInt(prompt('Inserisci un numero'))
}

while(userNumbers.length < totalNumbers){
  const userNumber = parseInt(prompt('Inserisci un numero'))
  if(!userNumber.includes(userNumber)){
    userNumbers.push(userNumber);
  }
}


setTimeout(function(){
userNumbers = insertNumbers(totalNumbers);
guessNumbers = getGuessNumbers(randomNumbers, userNumbers);
})

function getGuessNumbers(simonNum , numbersToCheck){
  const guessed = [];

  for(let i = 0 ; i < simonNum.length ; i++){
    const sNum = simonNum[i];

    if(numbersToCheck.includes(sNum)){
      guessed.push(sNum);
    }
  }
}

function endGame(){
  if(guessNumbers.length === 0){
    message.innerHTML = 'Memoria da pesce rosso , nemmeno una parola!';


  }else if(guessNumbers.length === 1){
    message.innerHTML = 'Almeno una parola sei stato in grado di ricordarla';

  }

  btn.classList.remove('d-none');
}