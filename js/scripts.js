let player1 = new Player();
let player2 = new Player ();

function Player() {
  this.turnCount = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.currentRoll;
}

Player.prototype.endTurn = function(){
  this.totalScore += this.turnScore;
  this.clearScore();
  this.turnCount++
}

Player.prototype.clearScore = function() {
  this.turnScore = 0;
}

Player.prototype.addScore = function(value) {
  this.turnScore += value;
}

function rollDie(player) {
  let result = Math.floor(Math.random() * 6) + 1;
  player.currentRoll = result;

  if (result > 1) {
    player.addScore(result);
    return true;
  }
  else {
    player.clearScore();
    player.endTurn();
    return false;
  }
}

$(document).ready(function() {
  $("form#enterName").submit(function(event) {
    event.preventDefault();
    $("#nameOne").text($("input#playerOneName").val());
    $("#nameTwo").text($("input#playerTwoName").val());
    $("#player2").hide();
    $("#player1").show();
  });
  $("form#player1Play").submit(function(event) {
    event.preventDefault();
    let roll = rollDie(player1);
    if (roll) {
      alert(player1.currentRoll);
      alert(player1.turnScore);
      $("#rollResult-1").html(player1.currentRoll); 
      $("#total-1").html(player1.turnScore);
    } else {
      $("#rollResult-1").html(player1.currentRoll + ". Your turn is over");
      $("#total-1").html(0);
      $("#player1").hide();
      $("#player2").show();
    }
  });
  $("form#player1Hold").submit(function(event) {
    event.preventDefault();
    $("#rollResult-1").html("You ended your turn.");
    $("#total-1").html(player1.turnScore);
    player1.endTurn;
    $("#player1").hide();
    $("#player2").show();
  });
  $("form#player2Play").submit(function(event) {
    event.preventDefault();
    let roll = rollDie(player2);
    if (roll) {
      alert(player2.currentRoll);
      alert(player2.turnScore);
      $("#rollResult-2").html(player2.currentRoll); 
      $("#total-2").html(player2.turnScore);
    } else {
      $("#rollResult-2").html(player2.currentRoll + ". Your turn is over"); 
      $("#total-2").html(0);
      $("#player2").hide();
      $("#player1").show();
    }
  });
  $("form#player2Hold").submit(function(event) {
    event.preventDefault();
    $("#rollResult-2").html("You ended your turn."); 
    $("#total-2").html(player2.turnScore);
    player1.endTurn;
    $("#player2").hide();
    $("#player1").show();
  });
});

/*let player1 = new Player($("input#playerOneName").val());
let player2 = new Player($("input#playerTwoName").val());
let player3 = "test";
console.log(player1);*/