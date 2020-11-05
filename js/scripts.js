let player1 = new Player();
let player2 = new Player ();

function Player() {
  this.turnCount = 1;
  this.turnScore = 0;
  this.totalScore = 90;
  this.currentRoll;
}

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.turnCount++;
  this.turnScore = 0;
}

function rollDie(player) {
  let result = Math.floor(Math.random() * 6) + 1;
  player.currentRoll = result;

  if (result > 1) {
    player.turnScore += result;
    return true;
  }
  else {
    player.turnScore = 0;
    player.endTurn();
    return false;
  }
}

function endTurnPlayerOne() {
  if (player1.totalScore >= 100) {
    alert("Player 1 won the game!")
    $("#gameField").hide();
    $("#gameResult").show();
    $("#winnerName").html($("input#playerOneName").val());
  } else {
    $("#rollResult-1").html(" ");
    $("#turnScore-1").html(" ");
    $("#total-1").html(player1.totalScore);
    $("#player1").hide();
    $("#player2").show();
    $("#turnOne").html(player1.turnCount);
  }
}

function endTurnPlayerTwo() {
  if (player2.totalScore >= 100) {
    alert("Player 2 won the game!")
    $("#gameField").hide();
    $("#gameResult").show();
    $("#winnerName").html($("input#playerTwoName").val());
  } else {
    $("#rollResult-2").html(" ");
    $("#turnScore-2").html(" ");
    $("#total-2").html(player2.totalScore);
    $("#player2").hide();
    $("#player1").show();
    $("#turnTwo").html(player2.turnCount);
  }
}

$(document).ready(function() {
  $("form#enterName").submit(function(event) {
    event.preventDefault();
    $(".nameOne").text($("input#playerOneName").val());
    $(".nameTwo").text($("input#playerTwoName").val());
    $("#turnOne").html(player1.turnCount);
    $("#turnTwo").html(player2.turnCount);
    $("#player2").hide();
    $("#player1").show();
  });

  $("form#player1Play").submit(function(event) {
    event.preventDefault();
    let roll = rollDie(player1);

    if (roll) {
      $("#rollResult-1").html(" " + player1.currentRoll); 
      $("#turnScore-1").html(" " + player1.turnScore);
    } else {
      alert("You rolled a 1! Your turn is over...")
      endTurnPlayerOne();
    }
  });

  $("form#player1Hold").submit(function(event) {
    event.preventDefault();
    player1.endTurn();
    endTurnPlayerOne();
  });

  $("form#player2Play").submit(function(event) {
    event.preventDefault();
    let roll = rollDie(player2);

    if (roll) {
      $("#rollResult-2").html(" " + player2.currentRoll); 
      $("#turnScore-2").html(" " + player2.turnScore);
    } else {
      alert("You rolled a 1! Your turn is over...")
      endTurnPlayerTwo();
    }
  });

  $("form#player2Hold").submit(function(event) {
    event.preventDefault();
    player2.endTurn();
    endTurnPlayerTwo();
  });

  $("#resetGame").submit(function(event) {
    event.preventDefault();
    location.reload();
  });
});