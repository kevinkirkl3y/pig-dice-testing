export function rollDie(player) {
  let result = Math.floor(Math.random() * 6) + 1;
  player.currentRoll = result;

  // if (result > 1) {
  //   player.turnScore += result;
  //   return true;
  // }
  // else {
  //   player.turnScore = 0;
  //   player.endTurn();
  //   return false;
  // }
}