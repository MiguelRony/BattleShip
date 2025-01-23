

export class Gameboard{
    constructor(){
        this.ships = [];
        this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
        this.missedShots = [];
        this.hits = 0;
    }

    placeShip(ship, startPosition, endPosition){
        if(startPosition[0] !== endPosition[0] && startPosition[1] !== endPosition[1]){
            return ('Invalid positions, ship must be placed horizontally or vertically');
        }else{
            this.ships.push({ship, startPosition, endPosition});
            if(startPosition[0] === endPosition[0]){
                for(let i = startPosition[1]; i <= endPosition[1]; i++){
                    this.board[startPosition[0]][i] = ship;
                }
            }else{
                for(let i = startPosition[0]; i <= endPosition[0]; i++){
                    this.board[i][startPosition[1]] = ship;
                }
            }
        }
        
    }

    receiveAttack(position){
        if(this.board[position[0]][position[1]] === null){
            this.missedShots.push(position);
            return 'miss';
        }else{
            this.board[position[0]][position[1]].hit();
            this.hits++;
            return 'hit';
        }
    }

    allSunk(){
        return this.ships.every(ship => ship.ship.isSunk());
    }
}