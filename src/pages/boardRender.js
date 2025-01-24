import boardStyles from '../styles/board.css';

export const boardRender = (board, gameboard) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'board';

    board.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        row.forEach((cell, cellIndex) => {
            const cellDiv = document.createElement('div');
            cellDiv.setAttribute('data-xyposition', `${rowIndex}-${cellIndex}`);
            cellDiv.className = 'cell';
            cellDiv.textContent = cell.ship ? 'S' :'';
            // cellDiv.style.backgroundColor = cell.hit ? 'red' : 'blue';
            cellDiv.addEventListener('click', () => {
                cellDiv.textContent = cell.ship ? 'X' : 'O';  
            });
            rowDiv.appendChild(cellDiv);
        });

        mainDiv.appendChild(rowDiv);
    });
    
    return mainDiv;
};
