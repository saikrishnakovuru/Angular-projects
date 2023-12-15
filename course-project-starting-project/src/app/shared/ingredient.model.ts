export class Ingredient {

    constructor(private name: string, private amount: number) {
    }

    public getName(): string {
        return this.name;
    }

    public getAmount(): number {
        return this.amount;
    }
}