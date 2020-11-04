let player1 = new Player("Bob");

function Roll(result) {
  this.result = result;
}

function Player(name) {
  this.name = name;
  this.turnCount = 0;
  this.totalScore = [];
}

Player.prototype.addRoll = function(roll){
  this.totalScore.push(roll);
}

Player.prototype.addTurn = function() {
  this.turnCount++
}

function rollDie() {
  let result = Math.floor(Math.random() * 6) + 1;
  let roll = new Roll(result);
  player1.addRoll(roll);
  return result;
}