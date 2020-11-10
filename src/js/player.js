export default function Player() {
  this.turnCount = 1;
  this.turnScore = 0;
  this.totalScore = 0;
  this.currentRoll;
}

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.turnCount++;
  this.turnScore = 0;
}