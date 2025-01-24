import { boardRender } from "./pages/boardRender.js";
import { GameController } from "./logic/GameController.js";
import { Player } from "./logic/Player.js";

const content = document.getElementById('content');
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
const gameController = GameController(player1, player2);
gameController.startGame();

const player1Board = boardRender(player1.gameboard.board, player1.gameboard);
const player2Board = boardRender(player2.gameboard.board, player2.gameboard);

content.appendChild(player1Board);
content.appendChild(player2Board);

activeBoard();
content.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.classList.contains('cell')){
        let position = e.target.dataset.xyposition;
        position = position .split('-').map(Number);
        let response = gameController.attack(position);
        if(response === 'hit'){
            e.target.classList.add('hit');
        }else if(response === 'miss'){
            e.target.classList.add('miss');
        }
        activeBoard();
        if(response === 'Game Over'){
            alert(gameController.getCurrentPlayer().name+' wins');
            content.removeEventListener('click', (e) => {});
            player1Board.classList.remove('active');
            player2Board.classList.remove('active');
        }
    }
});

function activeBoard (){
    console.log(gameController.getCurrentPlayer());
    if(gameController.getCurrentPlayer() === player2){
        player1Board.classList.add('active');
        player2Board.classList.remove('active');
    }else{
        player2Board.classList.add('active');
        player1Board.classList.remove('active');
    }
};
