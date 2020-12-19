'use strict';
const message=document.querySelector('.message')
const number=document.querySelector('.number')
const guessEl=document.querySelector('.guess')
const scoreEl=document.querySelector('.score')
const body=document.querySelector('body')
const highScore=document.querySelector('.highscore')
let secretNumber=Math.trunc(Math.random()*20)+1
let score=20
let highscore=0

const displayMessage=(info)=>{
    message.textContent=info
}

document.querySelector('.check').addEventListener('click',()=>{
    const guess=Number(guessEl.value)
    
    if(!guess){
        displayMessage('😇Please guess a number!')
    }else if(guess===secretNumber){

        displayMessage('👍correct guess')
        number.textContent=secretNumber

        body.style.backgroundColor='#425356'
        number.style.width="30rem"
        if(score>highscore){
            highscore=score
            highScore.textContent=highscore
        }
    }
    else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? '🤦‍♀️Too hight' : '🤦‍♂️Too low')
            score--
            scoreEl.textContent=score
        }else{
            displayMessage('😢You lost the game')
            scoreEl.textContent=0
        }
    }
})
       
    

//     }else if(guess>secretNumber){
//         message.textContent='🤦‍♂️Too high'
//         score--
//         scoreEl.textContent=score
        
       
//     }else if(guess<secretNumber){
//         if(score>1){
//             message.textContent='🤦‍♀️Too low'
//             score--
//             scoreEl.textContent=score
//         }else{
//             message.textContent='😢You lost the game'
//             scoreEl.textContent=0
//         }
        
//     }
// })
document.querySelector('.again').addEventListener('click',()=>{
    score=20
    secretNumber=Math.trunc(Math.random()*20)+1
    displayMessage('😂start guessing')
    scoreEl.textContent=score
    number.textContent='?'
    guessEl.value=''
    body.style.backgroundColor='#222'
        number.style.width="15rem"
})