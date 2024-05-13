class Developer extends Employee {
    private _programmingLanguage: string;

    constructor(name: string, age: number, startDate: Date, salary: number, programmingLanguage: string) {
        super(name, age, startDate, salary);
        this._programmingLanguage = programmingLanguage;
    }

    public toString(): string {
        return `Developer { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Programming Language: ${this._programmingLanguage} }`;
    }
}