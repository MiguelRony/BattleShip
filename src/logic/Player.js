

export class Player{
    constructor(name){
        this.name = name;
        this.gameboard = new Gameboard();
    }

    attack(opponent, position){
        return opponent.gameboard.receiveAttack(position);
    }
}