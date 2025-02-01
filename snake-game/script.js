let gameContainer=document.querySelector(".game")
let food=document.querySelector(".food");
let snake=document.querySelector(".snake");
let scoreContainer=document.querySelector(".score-container")

let score=0;
let foodX,foodY;
let headX=12,headY=12;
let velocityX=0,velocityY=0;
let snakeBody=[];

function generateFood(){
    foodX=Math.floor(Math.random()*25+1);
    foodY=Math.floor(Math.random()*25+1);

    for(let i=0;i<snakeBody.length;i++){
      if(foodY==snakeBody[i][1] && foodX==snakeBody[i][0]){
        generateFood();
      }  
    };
}



function renderGame(){
    let updatedGame=`<div class="food" style="grid-area:${foodY}/${foodX};"></div>`;

    if(foodX == headX && foodY == headY){
        snakeBody.push([foodX,foodY]);
        generateFood();
        score+=1;
        scoreContainer.innerHTML="score:"+score;
    }

    snakeBody.pop();
    headY+=velocityY;
    headX+=velocityX;
    snakeBody.unshift([headX,headY]);



    if(headX==0 || headY==0 || headX==26 || headY==26){
        gameOver();
    };

    for(let i=1;i<snakeBody.length;i++){
        if(snakeBody[0][0]==snakeBody[i][0] && snakeBody[0][1]==snakeBody[i][1]){
            gameOver();
        }
    };

    for(let i=0;i<snakeBody.length;i++){
        updatedGame +=`<div class="snake" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    };

    gameContainer.innerHTML=updatedGame;


    
}


function gameOver(){
    alert("game over!!")
    headX=12,headY=12;
    velocityX=0,velocityY=0;
    snakeBody=[];
    score=0;
    scoreContainer.innerHTML="score"+score;
    generateFood();
}

generateFood();
setInterval(renderGame,150);


document.addEventListener("keydown",function(e){
    console.log(e.key);

    if(e.key=="ArrowUp" && velocityY!=1){
        velocityY=-1;
        velocityX=0;
    }else if(e.key=="ArrowDown" &&velocityY!=-1){
        velocityY=1;
        velocityX=0;
    }else if(e.key=="ArrowLeft" &&velocityX!=1){
        velocityY=0;
        velocityX=-1;
    }else if(e.key=="ArrowRight" &&velocityX!=-1){
        velocityY=0;
        velocityX=1;
    };

});