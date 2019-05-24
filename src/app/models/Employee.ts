export class Employee{
    employeeId: number;
	employeeEmail: string;
    employeeName: string;

    constructor(employeeId: number, employeeEmail: string, employeeName: string){
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
        this.employeeName = employeeName;
    }
}