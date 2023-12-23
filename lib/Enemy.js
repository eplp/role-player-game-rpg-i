const Potion = require('./Potion.js');
const Character = require('./Character.js');

class Enemy extends Character {
   constructor(name, weapon) {
      super(name); //* calls parent (base class) constructor 
        this.weapon = weapon;
        this.potion = new Potion();
   }

   //* returns an object
   getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
   }
}

module.exports = Enemy;
