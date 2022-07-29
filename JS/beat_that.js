let sound = new Audio('../sound/main_sound.mp3');
    let header = document.getElementById("header");
    let player1Score = 0;
    let player2Score = 0;
    let chance = 10;
    let btn = document.getElementById("btn");
    let restart = document.getElementById("restart");
    let turn = "player1";
    let turnParagraph = document.getElementById("turn-paragraph");
    btn.addEventListener('click', function(){
        sound.play();
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

      if(turn == "player1"){
        player1Score += add(randomNumberForDice1, randomNumberForDice2);
        player1.innerHTML = player1Score;
        turn = "player2";
        turnParagraph.innerHTML = "player 2 turns";
      }else if(turn == "player2"){
        player2Score += add(randomNumberForDice1, randomNumberForDice2);
        player2.innerHTML = player2Score;
        turn = "player1";
        turnParagraph.innerHTML = "player 1 turns";
      }
      chance--;
      btn.innerHTML = "ROLL " + chance; 
      checkWinner();
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
        btn.style.display = "none";
        restart.style.display = "inline-block";
      }
    }

    restart.addEventListener('click', function(){
      chance = 10;
      btn.innerHTML = "ROLL"; 
      btn.style.display = "inline-block";
      turnParagraph.style.display = "block";
      restart.style.display = "none";
      player1Score = 0;
      player2Score = 0;
      player1.innerHTML = player1Score;
      player2.innerHTML = player2Score;
      header.innerHTML = "Beat that";
    });

    function add(randomNumberForDice1, randomNumberForDice2){
      let result = "";
      if(randomNumberForDice1 > randomNumberForDice2){
        result = "" + randomNumberForDice1 + "" + randomNumberForDice2;
      }else {
        result = "" + randomNumberForDice2 + "" + randomNumberForDice1;
      }
      return Number(result);
    }