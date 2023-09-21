// esercizio js-simon



// 1 genero 5 numeri random univoci e stampa
// 2 setTimeout per la chiusura della visualizzazione
// 3 setTimeout per il lancio dei prompt (verfica univocità numeri inseiriti)
// 4 confronto fra numeri inseriti e numeri generati
// 5 output risultato

// prendo i miei elementi
const btn = document.querySelector('button');
const display = document.getElementById('display');
const totalNumbers = 5;
let randomNumbers = [];
let userNumbers = [];
let guessedNumbers = [];

// 1 genero 5 numeri random da stampare 
while(randomNumbers.length < totalNumbers){
  const randomNumber = getRandomNumbers(1 ,100);
  if(!randomNumbers.includes(randomNumber)){
    randomNumbers.push(randomNumber);
  }
}


console.log(randomNumbers);
display.innerHTML = randomNumbers.join(', ');

// 2 
setTimeout(resetDisplay, 5000)

// 3

setTimeout(function(){
 userNumbers = insertNumbers(totalNumbers);
 guessedNumbers = getGuessedNumbers(randomNumbers , userNumbers);


//  numeri indovinati
console.log(guessedNumbers);

endgame();


} , 6000)







// tutte le FUNZIONI ***********************************************
// funzione per il random
function getRandomNumbers(min , max){
       return Math.floor(Math.random() * (max - min + 1 ) + min);
     }


// funzione per cancellare il display (setTimeout)
function resetDisplay(){
  display.innerHTML = '';
  message.innerHTML = 'Scrivi i numeri visualizzati';
}

//  funzione per l'inserimento dei numeri univoci tramite prompt
function insertNumbers(tot){
  const numbers = [];
  while(numbers.length < tot){
  const userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
  if(!numbers.includes(userNumber)){
    numbers.push(userNumber);
  }
 }
 return numbers;
} 

// funzione per stabilire quali numeri sono vincenti (indovinati dall'utente)

function getGuessedNumbers(simonNum , numbersToCheck){
  const guessed = [];
  // ciclo i numeri estratti random con un ciclo for
  for(let i = 0 ; i < simonNum.length ; i++){
    const sNum = simonNum[i];
    if(numbersToCheck.includes(sNum)){
      guessed.push(sNum);
    }

  }

  return guessed;
}


// funzione di fine gioco

function endgame (){
  if(guessedNumbers.length === 0){
    message.innerHTML = 'Memoria a breve termine non pervenuta, nessun numero indovinato!!!'
  }else if(guessedNumbers.length === 1){
    message.innerHTML = `Hai indovinato il numero`
    display.innerHTML = guessedNumbers[0];
  }else {
    message.innerHTML = `Numeri indovinati`
    display.innerHTML = guessedNumbers.join(', ');
  }
}































// function init(){
//   randomNumbers = getRandomNumbers();
  
//   display.innerHTML = randomNumbers.join(', ')
  
//   btn.addEventListener('click' , start)
//   }
  
//   function start(){
//     this.classList.add('d-none');
//   }
  
//   while(randomNumbers.length < totalNumbers){
//     const randomNumber = getRandomNumbers(1 , 100);
//     if(!randomNumbers.includes(randomNumber));
//     randomNumbers.push(randomNumber);
//   }
  
//   display.innerHTML = randomNumbers.join(', ')
  
//   function getRandomNumbers(min , max){
//     return Math.floor(Math.random() * (max -min + 1 ) + min)
//   }
  
  
//   setTimeout(resetDisplay, 5000)
  
//   setTimeout(insertNumbers , (attesa + 1)* 1000)
  
//   function resetDisplay(){
//     display.innerHTML = '';
//     message.innerHTML = 'Scrivi i numeri memorizzati'
//   }
  
//   function insertNumbers(tot){
//     const numbers = [];
//     let userNumber = parseInt(prompt('Inserisci un numero'))
//   }
  
//   while(userNumbers.length < totalNumbers){
//     const userNumber = parseInt(prompt('Inserisci un numero'))
//     if(!userNumber.includes(userNumber)){
//       userNumbers.push(userNumber);
//     }
//   }
  
  
//   setTimeout(function(){
//   userNumbers = insertNumbers(totalNumbers);
//   guessNumbers = getGuessNumbers(randomNumbers, userNumbers);
//   })
  
//   function getGuessNumbers(simonNum , numbersToCheck){
//     const guessed = [];
  
//     for(let i = 0 ; i < simonNum.length ; i++){
//       const sNum = simonNum[i];
  
//       if(numbersToCheck.includes(sNum)){
//         guessed.push(sNum);
//       }
//     }
//   }
  
//   function endGame(){
//     if(guessNumbers.length === 0){
//       message.innerHTML = 'Memoria da pesce rosso , nemmeno una parola!';
  
  
//     }else if(guessNumbers.length === 1){
//       message.innerHTML = 'Almeno una parola sei stato in grado di ricordarla';
  
//     }
  
//     btn.classList.remove('d-none');
//   }