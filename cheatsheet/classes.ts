class ToyFactory {
    dailyProductionCount: number

    constructor(dailyProductionCount: number) {
        this.dailyProductionCount = dailyProductionCount;
    }
}


let factory: ToyFactory = new ToyFactory(10)

console.log(factory);