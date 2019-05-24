export class BenefitPlan {
    benefitId: number;
    providerId: number;
    companyId: number;

    constructor(benefitId: number, providerId: number, companyId: number) {
        this.benefitId = benefitId;
        this.providerId = providerId;
        this.companyId = companyId;
    }
}