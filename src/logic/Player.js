import { Gameboard } from './Gameboard.js';

export class Player{
    constructor(name){
        this.name = name;
        this.gameboard = new Gameboard();
    }

    attack(opponent, position){
        console.log(this.name+" attacking");
        return opponent.gameboard.receiveAttack(position);
    }
}