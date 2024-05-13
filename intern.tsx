class Intern extends Employee {
    private _mentor: string;

    constructor(name: string, age: number, startDate: Date, salary: number, mentor: string) {
        super(name, age, startDate, salary);
        this._mentor = mentor;
    }

    public toString(): string {
        return `Intern { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Mentor: ${this._mentor} }`;
    }
}