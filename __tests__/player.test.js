import TestRunner from 'jest-runner';
import Player from './../src/js/player';
describe('Player', () => {

  test('should correctly create a player with score details', () => {
    const player = new Player (1,2,6);
    expect(player.turnCount).toEqual(1);
    expect(player.turnScore).toEqual(2);
    expect(player.totalScore).toEqual(6);
  });

  test('should correctly add the turn score to the total score', () => {
    const player1 = new Player(1,2,6);
    player1.endTurn();
    expect(player1.totalScore).toEqual(8);
  });

  test('should at one to the turn count', () => {
    const player1 = new Player(1,2,6);
    player1.endTurn();
    expect(player1.turnCount).toEqual(2);
  });

  test('should reset turnScore to 0 after endTurn function is ran', () => {
    const player1 = new Player(1,2,6);
    player1.endTurn();
    expect(player1.turnScore).toEqual(0);
  });

});