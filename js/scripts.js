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
    $(".nameOne").text($("input#playerOneName").val());
    $(".nameTwo").text($("input#playerTwoName").val());
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
      $("#total-2").html(" " + player2.totalScore);
      alert("You rolled a 1! Your turn is over...")
      $("#rollResult-1").html(" ");
      $("#turnScore-1").html(" ");
      $("#total-1").html(player1.totalScore);
      $("#player1").hide();
      $("#player2").show();
    }
  });
  $("form#player1Hold").submit(function(event) {
    event.preventDefault();
    $("#rollResult-1").html(" ");
    $("#turnScore-1").html(" ");
    player1.endTurn;
    $("#total-1").html(player1.totalScore);
    $("#player1").hide();
    $("#player2").show();
  });
  $("form#player2Play").submit(function(event) {
    event.preventDefault();
    let roll = rollDie(player2);
    if (roll) {
      $("#rollResult-2").html(" " + player2.currentRoll); 
      $("#turnscore-2").html(" " + player2.turnScore);
    } else {
      alert("You rolled a 1! Your turn is over...")
      $("#rollResult-2").html(" "); 
      $("#turnScore-2").html(" ");
      $("#total-2").html(player2.totalScore);
      $("#player2").hide();
      $("#player1").show();
    }
  });
  $("form#player2Hold").submit(function(event) {
    event.preventDefault();
    $("#rollResult-2").html(" ");
    $("#turnScore-2").html(" "); 
    player2.endTurn;
    $("#total-2").html(player2.totalScore);
    $("#player2").hide();
    $("#player1").show();
  });
});

/*let player1 = new Player($("input#playerOneName").val());
let player2 = new Player($("input#playerTwoName").val());
let player3 = "test";
console.log(player1);*/