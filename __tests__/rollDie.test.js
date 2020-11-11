
import Player from './../src/js/player';
import { rollDie } from './../src/js/rollDie';
describe('rollDie', () => {

  test('this should return a random number', () => {
    const player = new Player();
    rollDie(player);
    expect(player.currentRoll).toBeGreaterThanOrEqual(1);
    expect(player.currentRoll).toBeLessThanOrEqual(6);
  });
  test
});