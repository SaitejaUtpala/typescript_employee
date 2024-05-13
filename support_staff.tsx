class SupportStaff extends Employee {
    private _department: string;

    constructor(name: string, age: number, startDate: Date, salary: number, department: string) {
        super(name, age, startDate, salary);
        this._department = department;
    }

    public toString(): string {
        return `SupportStaff { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Department: ${this._department} }`;
    }
}