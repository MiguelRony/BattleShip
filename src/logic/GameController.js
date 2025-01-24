import { Ship } from "./Ship.js";
import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";

export const GameController = ((p1, p2) => {
    const player1 = p1;
    const player2 = p2;
    let currentPlayer = player1;
    let opponent = player2;
    let gameOver = false;

    const startGame = () => {
        // player1.gameboard.placeShip(new Ship('Carrier', 5), [0,0], [0,4]);
        // player1.gameboard.placeShip(new Ship('Battleship', 4), [1,0], [1,3]);
        // player1.gameboard.placeShip(new Ship('Cruiser', 3), [2,0], [2,2]);
        // player1.gameboard.placeShip(new Ship('Submarine', 3), [3,0], [3,2]);
        player1.gameboard.placeShip(new Ship('Destroyer', 2), [4,0], [4,1]);

        // player2.gameboard.placeShip(new Ship('Carrier', 5), [0,0], [0,4]);
        // player2.gameboard.placeShip(new Ship('Battleship', 4), [1,0], [1,3]);
        // player2.gameboard.placeShip(new Ship('Cruiser', 3), [2,0], [2,2]);
        // player2.gameboard.placeShip(new Ship('Submarine', 3), [3,0], [3,2]);
        player2.gameboard.placeShip(new Ship('Destroyer', 2), [4,0], [4,1]);
    }

    const switchTurns = () => {
        if(currentPlayer === player1){
            currentPlayer = player2;
            opponent = player1;
        }else{
            currentPlayer = player1;
            opponent = player2;
        }
    }

    const attack = (position) => {
        console.log(currentPlayer.name);
        if(!gameOver){
            let response = currentPlayer.attack(opponent, position);
            
            if(response !== 'miss' && response !== 'hit'){
                return response;
            }
            if(opponent.gameboard.allSunk()){
                gameOver = true;
                return 'Game Over';
            }
            switchTurns();
            return response;
        }
    }

    const getCurrentPlayer = () => currentPlayer;

    return { getCurrentPlayer, startGame, attack };
});