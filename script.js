'use strict';

let score=20;
let highscore=0;
let snumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=snumber;

const displaymsg=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector(".check").addEventListener('click',function () {
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess)
    if(!guess){
        // document.querySelector('.message').textContent="No number";
        displaymsg("no number!")
    }
    else if(guess=== snumber){
        // document.querySelector('.message').textContent="Correct Answer";
        displaymsg("Correct Answer")
        document.querySelector("body").style.backgroundColor="green";

        //highscore
        if(score>highscore){
            highscore=score
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else if (guess!==snumber){
        if(score>1){
            displaymsg(guess>snumber?"To high":"To Low");
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{
            document.querySelector('.message').textContent="game over";
            document.querySelector('.score').textContent=0;
            
            }
    }
    // else if(guess>snumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent="Too high";
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //     document.querySelector('.message').textContent="game over";
    //     document.querySelector('.score').textContent=0;
        
    //     }
    // }
    // else if(guess<snumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent="Too low";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //         }
    //         else{
    //         document.querySelector('.message').textContent="game over";
    //         document.querySelector('.score').textContent=0;
            
    //         }
    //     }
});

// again button

document.querySelector('.again').addEventListener("click",function(){
    score=20;
    snumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start Guessing....";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').vale='';
    document.querySelector("body").style.backgroundColor="black";



})

