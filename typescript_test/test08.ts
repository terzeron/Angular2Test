class MyCar2 {
    constructor(private _carName: string, private _numTier: number) { }
    public getCarName(): string {
        return this._carName;
    }

    public numTier() {
        return this._numTier;
    }
}

