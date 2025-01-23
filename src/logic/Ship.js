

export class Ship{
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.hits = 0;
    }

    hit(){
        this.hits++;
    }

    isSunk(){
        return this.hits === this.size;
    }
}