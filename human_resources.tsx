class HumanResources extends Employee {
    private _areaOfExpertise: string;

    constructor(name: string, age: number, startDate: Date, salary: number, areaOfExpertise: string) {
        super(name, age, startDate, salary);
        this._areaOfExpertise = areaOfExpertise;
    }

    public toString(): string {
        return `HumanResources { Name: ${this.name}, Age: ${this.age}, Start Date: ${this.startDate.toDateString()}, Salary: ${this.salary}, Area of Expertise: ${this._areaOfExpertise} }`;
    }
}