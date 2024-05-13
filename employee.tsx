class Employee {
    private static _raisePercentage: number = 0.05;

    private _name: string;
    private _age: number;
    private _startDate: Date;
    private _salary: number;
    private _raises: { date: Date, oldSalary: number, newSalary: number }[] = [];

    constructor(name: string, age: number, startDate: Date, salary: number) {
        this._name = name;
        this._age = age;
        this._startDate = startDate;
        this._salary = salary;
    }

    public calculateTenure(): number {
        const today: Date = new Date();
        const years: number = today.getFullYear() - this._startDate.getFullYear();
        const months: number = today.getMonth() - this._startDate.getMonth();
        const days: number = today.getDate() - this._startDate.getDate();
        let tenure: number = years;
        if (months < 0 || (months === 0 && days < 0)) {
            tenure -= 1;
        }
        return tenure;
    }

    public applyRaise(percentage?: number): void {
        const raisePercentage: number = percentage ?? Employee._raisePercentage;
        const currentSalary: number = this._salary;
        this._salary *= (1 + raisePercentage);
        this._raises.push({ date: new Date(), oldSalary: currentSalary, newSalary: this._salary });
    }

    public getSalaryHistory(): { date: Date, oldSalary: number, newSalary: number }[] {
        return this._raises;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public get startDate(): Date {
        return this._startDate;
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(value: number) {
        this._salary = value;
    }

    public static get raisePercentage(): number {
        return this._raisePercentage;
    }

    public static set raisePercentage(value: number) {
        this._raisePercentage = value;
    }

    public toString(): string {
        return `Employee { Name: ${this._name}, Age: ${this._age}, Start Date: ${this._startDate.toDateString()}, Salary: ${this._salary} }`;
    }
}
