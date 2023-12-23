import inquirer from 'inquirer';
import { Enemy } from './Enemy.js';
import { Player } from './Player.js';

export function Game() {
   this.roundNumber = 0;
   this.isPlayerTurn = false;
   this.enemies = [];
   this.currentEnemy;
   this.player;
}

Game.prototype.initializeGame = function () {
   this.enemies.push(new Enemy('goblin', 'sword'));
   this.enemies.push(new Enemy('orc', 'baseball bat'));
   this.enemies.push(new Enemy('skeleton', 'axe'));

   this.currentEnemy = this.enemies[0];

   inquirer
      .prompt({
         type: 'text',
         name: 'name',
         message: 'What is your name?',
      })
      // destructure name from the prompt object
      //* The function keyword would have created a new lexical scope where this no longer references the Game object.
      //* To avoid this problem, use the arrow shorthand for all inquirer callbacks in this project!
      .then(({ name }) => {
         this.player = new Player(name);
         this.startNewBattle()
      });
};

// module.exports = Game;
