
import Player from './../src/js/player';
import { rollDie } from './../src/js/rollDie';
describe('rollDie', () => {

  test('this should return a random number between 1 and 6', () => {
    const player = new Player();
    rollDie(player);
    expect(player.currentRoll).toBeGreaterThanOrEqual(1);
    expect(player.currentRoll).toBeLessThanOrEqual(6);
  });
  test('this should recognize if the random number greater than 1', () => {
    const player1 = new Player();
    expect(rollDie(player1)).toEqual(true); 
  });
  test('this should recognize if the random number equals 1', () => {
    const player2 = new Player();
    expect(rollDie(player2)).toEqual(false);
  });
});