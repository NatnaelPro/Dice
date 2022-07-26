let header = document.getElementById("header");
let player1Score = 0;
let player2Score = 0;
let chance = 20;
let btn = document.getElementById("btn");
let restart = document.getElementById("restart");
let turn = "player1"
let turnParagraph = document.getElementById("turn-paragraph");
btn.addEventListener('click', function(){
    roll();
});
function roll(){
    let randomNumberForDice1 = Math.floor(Math.random() * 6) + 1;
    let randomNumberForDice2 = Math.floor(Math.random() * 6) + 1;

    let dice1 = document.getElementById('img1');
    let dice2 = document.getElementById('img2');

    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");

    dice1.setAttribute("src", "images/dice" + randomNumberForDice1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumberForDice2 + ".png");

    if((turn === "player1") && (((randomNumberForDice1 + randomNumberForDice2) == 6) || ((randomNumberForDice1 + randomNumberForDice2) == 7) || ((randomNumberForDice1 + randomNumberForDice2) == 8))){
        player1Score = 0;
        player1.innerHTML = player1Score;
        turnParagraph.innerHTML ="Player 2 turns";
        knockOutEffect();
        turn = "player2";
    }else if((turn === "player2") && (((randomNumberForDice1 + randomNumberForDice2) == 6) || ((randomNumberForDice1 + randomNumberForDice2) == 7) || ((randomNumberForDice1 + randomNumberForDice2) == 8))){
        player2Score = 0;
        player2.innerHTML = player2Score;
        turnParagraph.innerHTML ="Player 1 turns";
        knockOutEffect();
        turn = "player1";
    }else if(turn === "player1"){
        player1Score += (randomNumberForDice1 + randomNumberForDice2)
        player1.innerHTML = player1Score;
        turn = "player2";
        turnParagraph.innerHTML = "Player 2 turns";
    }else if(turn === "player2"){
        player2Score += (randomNumberForDice1 + randomNumberForDice2)
        player2.innerHTML = player2Score;
        turn = "player1";
        turnParagraph.innerHTML = "Player 1 turns";
    }
    chance--;
    btn.innerHTML = "ROLL " + chance; 
    checkWinner();
}

function knockOutEffect(){
    header.classList.add('knock-out-effect');
    const timeout = setTimeout(function(){
    header.classList.remove('knock-out-effect');
    }, 300);
}

function checkWinner(){
    if(chance == 0){
    if(player1Score > player2Score){
        turnParagraph.style.display = "none";
        header.innerHTML = "Player 1 Wins!"
    }else if(player1Score < player2Score){
    turnParagraph.style.display = "none";
    header.innerHTML = "Player 2 Wins!"
    }else {
    turnParagraph.style.display = "none";  
    header.innerHTML = "Draw"
    }
    // chance = 20;
    // btn.innerHTML = "ROLL " + chance; 
    btn.style.display = "none";
    restart.style.display = "inline-block";
    }
}

restart.addEventListener('click', function(){
    chance = 20;
    btn.innerHTML = "ROLL"; 
    btn.style.display = "inline-block";
    turnParagraph.style.display = "block";
    restart.style.display = "none";
    player1Score = 0;
    player2Score = 0;
    player1.innerHTML = player1Score;
    player2.innerHTML = player2Score;
    header.innerHTML = "Knock Out";
});