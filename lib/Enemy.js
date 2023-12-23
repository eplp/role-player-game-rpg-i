import { Potion } from './Potion.js';
import { Character } from './Character.js';

export function Enemy(name, weapon) {
   this.name = name;
   this.weapon = weapon;
   this.potion = new Potion();
   this.health = Math.floor(Math.random() * 10 + 85);
   this.strength = Math.floor(Math.random() * 5 + 5);
   this.agility = Math.floor(Math.random() * 5 + 5);
}

//! inherit prototype methods from Character here:
Enemy.prototype = Object.create(Character.prototype);

//* returns an object
Enemy.prototype.getDescription = function () {
   return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

// module.exports = Enemy;
