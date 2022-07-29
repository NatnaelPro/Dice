let sound = new Audio('sound/main_sound.mp3');
    let player1Score = 0;
    let player2Score = 0;
    let btn = document.getElementById("btn");
    let restart = document.getElementById("restart");
    let stop = document.getElementById("stop");
    let turn = "player1";
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let turnParagraph = document.getElementById("turn-paragraph");
    let header = document.getElementById("header");
    let newScore = document.getElementById("new-score");
    let newScoreNumber = 0;
    btn.addEventListener('click', function(){
      sound.play();
      roll();
    });
    function roll(){
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      let img = document.getElementById('img');
      img.setAttribute("src", "images/dice" + randomNumber + ".png");
      if(turn == "player1" && randomNumber == 1){
        newScoreNumber = 0;
        turnParagraph.innerHTML = "Outch! you rolled 1";
        turn = "player2";
        turnParagraph.innerHTML = "player 2 turns";
        newScore.innerHTML = newScoreNumber;
      }else if(turn == "player2" && randomNumber == 1){
        newScoreNumber = 0;
        turnParagraph.innerHTML = "Outch! you rolled 1";
        turn = "player1";
        turnParagraph.innerHTML = "player 1 turns";
        newScore.innerHTML = newScoreNumber;
      }else if(turn == "player1"){
        newScoreNumber += randomNumber;
        newScore.innerHTML = newScoreNumber;
        checkWinner();
      }else if(turn == "player2"){
        newScoreNumber += randomNumber;
        newScore.innerHTML = newScoreNumber;
        checkWinner();
      }
    }
    function checkWinner(){
      if((player1Score >= 100) || (turn == "player1" && newScoreNumber >= 100) || (turn == "player1" && ((newScoreNumber + player1Score) >= 100))){
        if(turn == "player1" && ((newScoreNumber + player1Score) >= 100)){
          player1.innerHTML = (newScoreNumber + player1Score);
        }
        turnParagraph.style.display = "none";
        header.innerHTML = "player 1 wins!!";
        btn.style.display = 'none';
        restart.style.display = "inline-block";
        stop.style.display = 'none';
      }else if((player2Score >= 100) || (turn == "player2" && newScoreNumber >= 100) || (turn == "player2" && ((newScoreNumber + player2Score) >= 100))){
        if(turn == "player2" && ((newScoreNumber + player2Score) >= 100)){
          player2.innerHTML = (newScoreNumber + player2Score);
        }
        turnParagraph.style.display = "none";
        header.innerHTML = "player 1 wins!!"
        btn.style.display = 'none';
        restart.style.display = "inline-block";
        stop.style.display = 'none';
      }
    }
    stop.addEventListener('click', function(){
      if(turn == "player1"){
        player1Score += newScoreNumber;
        player1.innerHTML = player1Score;
        newScoreNumber = 0;
        turn = "player2";
        turnParagraph.innerHTML = "player 2 turns"
        newScore.innerHTML = newScoreNumber;
        checkWinner();
      }else {
        player2Score += newScoreNumber;
        player2.innerHTML = player2Score;
        newScoreNumber = 0;
        turn = "player1";
        turnParagraph.innerHTML = "player 1 turns"
        newScore.innerHTML = newScoreNumber;
        checkWinner();
      } 
    });
    restart.addEventListener('click', function(){
      header.innerHTML = "PIG";
      btn.style.display = "inline-block";
      stop.style.display = "inline-block";
      turnParagraph.style.display = "block";
      restart.style.display = "none";
      player1Score = 0;
      player2Score = 0;
      player1.innerHTML = player1Score;
      player2.innerHTML = player2Score;
      newScoreNumber = 0;
    });