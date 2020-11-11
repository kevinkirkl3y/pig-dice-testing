export default function Player(turnCount, turnScore, totalScore) {
  this.turnCount = 1;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.currentRoll;
}

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.turnCount++;
  this.turnScore = 0;
}