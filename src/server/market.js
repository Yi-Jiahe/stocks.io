class Player {
    constructor(name){
        this.name = name;
        this.money = 100;
        this.stock = 10;
        this.orders = {
            "buy": [],
            "sell": []
        };
    }
}

class Market {
    constructor(){
        this.orders = {
            "buy": {},
            "sell": {}
        }
    }
}