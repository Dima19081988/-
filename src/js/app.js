// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function getHealthStatus(character) {
    const health = character.health;

    if (health > 50) {
        return 'healthy';
    } else if (health >= 25) {
        return 'wounded';
    } else {
        return 'critical';
    }
}
