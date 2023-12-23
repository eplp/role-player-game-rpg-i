const Potion=require('./Potion.js');
const Character = require('./Character.js');

function Player(name = '') {
   this.name = name;
   this.health = Math.floor(Math.random() * 10 + 95);
   this.strength = Math.floor(Math.random() * 5 + 7);
   this.agility = Math.floor(Math.random() * 5 + 7);
   this.inventory = [new Potion('health'), new Potion()];
}

//! inherit prototype methods from Character here:
Player.prototype = Object.create(Character.prototype);

//* returns an object with various player properties
Player.prototype.getStats = function () {
   return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
   };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function () {
   if (this.inventory.length) {
      return this.inventory;
   }
   return false;
};

Player.prototype.addPotion = function (potion) {
   this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {
   //* The .splice() method removes items from an array and returns the removed item(s) as a new array.
   //* Thus, two things are happening here: the original inventory array has a single Potion removed at/
   //* the specified index value and put into a new "removed items" array, then the Potion at index[0] of this
   //* "removed items" array is saved in a potion variable.
   const potion = this.getInventory().splice(index, 1)[0];

   switch (potion.name) {
      case 'agility':
         this.agility += potion.value;
         break;
      case 'health':
         this.health += potion.value;
         break;
      case 'strength':
         this.strength += potion.value;
         break;
   }
};

module.exports = Player;
