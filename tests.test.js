import { Ship } from './src/logic/Ship';
import { Gameboard } from './src/logic/Gameboard';

test('hit a Ship', () => { 
    const ship = new Ship('Carrier', 5);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('should not sink with single hit', () => { 
    const ship = new Ship('Carrier', 5);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('should not allow a Ship to be placed diagonally', () => {
    const gameboard = new Gameboard();
    const ship = new Ship('Carrier', 5);
    expect(gameboard.placeShip(ship, [0,0], [1,1])).toBe("Invalid positions, ship must be placed horizontally or vertically");
});

test('should place a Ship horizontally', () => {
    const gameboard = new Gameboard();
    const ship = new Ship('Carrier', 5);
    gameboard.placeShip(ship, [0,0], [0,4]);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);
    expect(gameboard.board[0][3]).toBe(ship);
    expect(gameboard.board[0][4]).toBe(ship);
});

test('should hit a Ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship('Carrier', 5);
    gameboard.placeShip(ship, [0,0], [0,4]);
    expect(gameboard.receiveAttack([0,0])).toBe('hit');
    expect(ship.hits).toBe(1);
});

test('should miss a Ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship('Carrier', 5);
    gameboard.placeShip(ship, [0,0], [0,4]);
    expect(gameboard.receiveAttack([1,0])).toBe('miss');
    expect(gameboard.missedShots).toEqual([[1,0]]);
});

test('should sink a Ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship('Carrier', 5);
    gameboard.placeShip(ship, [0,0], [0,4]);
    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([0,1]);
    gameboard.receiveAttack([0,2]);
    gameboard.receiveAttack([0,3]);
    gameboard.receiveAttack([0,4]);
    expect(ship.isSunk()).toBe(true);
});

test('should sink all Ships', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship('Carrier', 5);
    const ship2 = new Ship('Battleship', 4);
    gameboard.placeShip(ship1, [0,0], [0,4]);
    gameboard.placeShip(ship2, [1,0], [1,3]);
    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([0,1]);
    gameboard.receiveAttack([0,2]);
    gameboard.receiveAttack([0,3]);
    gameboard.receiveAttack([0,4]);
    gameboard.receiveAttack([1,0]);
    gameboard.receiveAttack([1,1]);
    gameboard.receiveAttack([1,2]);
    gameboard.receiveAttack([1,3]);
    expect(gameboard.allSunk()).toBe(true);
});