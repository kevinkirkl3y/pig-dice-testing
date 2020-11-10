import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Player from './player.js';
import {rollDie} from './rollDie.js';

let player1 = new Player();
let player2 = new Player();

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
    $("#player1").slideUp();
    $("#player2").slideDown();
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
    $("#player2").slideUp();
    $("#player1").slideDown();
    $("#turnTwo").html(player2.turnCount);
  }
}

$(document).ready(function() {
  $("form#enterName").submit(function(event) {
    event.preventDefault();
    
    $("#instructions").slideUp();
    $(".nameOne").text($("input#playerOneName").val());
    $(".nameTwo").text($("input#playerTwoName").val());
    $("#turnOne").html(player1.turnCount);
    $("#turnTwo").html(player2.turnCount);
    $("#player2").slideUp();
    $("#player1").slideDown();
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