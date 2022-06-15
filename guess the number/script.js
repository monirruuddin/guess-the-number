'use strict';

// all selection
let scoreAm = document.querySelector('.score');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let secretNumber = document.querySelector('.number');
let massage = document.querySelector('.message');
let inputnumber = document.querySelector('input');
secretNumber = Math.trunc(Math.random()*20)+1;

scoreAm.textContent = "20";

checkBtn.addEventListener('click',function(){
    if(inputnumber.value != 0 || inputnumber.value == null){
        if(inputnumber.value == secretNumber){
            massage.textContent = "Correct Number";
            document.querySelector('.number').textContent= secretNumber;
            document.querySelector('body').style.backgroundColor= "red";
           
           }else if(inputnumber.value > secretNumber){
               massage.textContent = "Too big";
               scoreAm.textContent--;
               if(scoreAm.textContent<0){
                   reset();
                   massage.textContent = "Lose! Trun Again";
               }
           }else if(inputnumber.value < secretNumber){
               massage.textContent = "Too small";
               scoreAm.textContent--;
               if(scoreAm.textContent<0){
                   reset();
                   massage.textContent = "Lose! Trun Again";
               }
           }
    }else {
        massage.textContent = "Input a number above 0;";
    }


    
   
});
let reset = function(){
    scoreAm.textContent = "20";
    inputnumber.value = '';
    secretNumber = 0;
    massage.textContent = "Start Guessing";
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.number').textContent= "?";
    document.querySelector('body').style.backgroundColor= "#222";
}

againBtn.addEventListener('click',reset);