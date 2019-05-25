export class Company{
    companyId: number;
	companyEmail: string;
    companyName: string;
    

    constructor(companyId: number, companyEmail: string, companyName: string){
        this.companyId = companyId;
        this.companyEmail = companyEmail;
        this.companyName = companyName;
    }
}