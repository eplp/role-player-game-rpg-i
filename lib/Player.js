const Potion = require('./Potion.js');
const Character = require('./Character.js');

class Player {
   constructor(name = '') {
      this.name = name;
      this.health = Math.floor(Math.random() * 10 + 95);
      this.strength = Math.floor(Math.random() * 5 + 7);
      this.agility = Math.floor(Math.random() * 5 + 7);
      this.inventory = [new Potion('health'), new Potion()];
   }

   getStats() {
      return {
         potions: this.inventory.length,
         health: this.health,
         strength: this.strength,
         agility: this.agility,
      };
   }

   getInventory() {
      if (this.inventory.length) {
         return this.inventory;
      }
      return false;
   }

   addPotion(potion) {
      this.inventory.push(potion);
   }

   usePotion(index) {
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
   }
}
module.exports = Player;
