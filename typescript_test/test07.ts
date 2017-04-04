class MyCar {
    _numTier: number;
    _carName: string;

    constructor(carName: string, numTier: number) {
        this._carName = carName;
        this._numTier = numTier;
    }

    getCarName(): String {
        return this._carName;
    }

    numTier() {
        return this._numTier;
    }
}

let myCar: MyCar = new MyCar("tiara", 1);
console.log(myCar.getCarName());