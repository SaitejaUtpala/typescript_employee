class Salesperson extends Employee {
    private _territory: string;

    constructor(name: string, age: number, startDate: Date, salary: number, territory: string) {
        super(name, age, startDate, salary);
        this._territory = territory;
    }

    public toString(): string {
        return `Salesperson { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Territory: ${this._territory} }`;
    }
}
