class Consultant extends Employee {
    private _specialization: string;

    constructor(name: string, age: number, startDate: Date, salary: number, specialization: string) {
        super(name, age, startDate, salary);
        this._specialization = specialization;
    }

    public toString(): string {
        return `Consultant { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Specialization: ${this._specialization} }`;
    }
}