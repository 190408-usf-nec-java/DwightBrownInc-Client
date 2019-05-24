import { Company } from './company';

export class Employee{
    employeeId: number;
	employeeEmail: string;
    employeeName: string;
    company: Company;

    constructor(employeeId: number, employeeEmail: string, employeeName: string, company: Company){
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
        this.employeeName = employeeName;
        this.company = company;
    }
}