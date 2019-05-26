import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { BenefitPlan } from '../../models/benefitplan';
import {Provider} from '../../models/provider';


@Injectable({
  providedIn: 'root'
})
export class EselectionService {
  private eselectStatusSubject = new Subject<number>();
  public $eselectStatus = this.eselectStatusSubject.asObservable();
  public benefit = new Array<BenefitPlan>();
  public providerlist = new Array<Provider>();
  constructor(private httpClient: HttpClient) { }

// Fixed error
getProviderList(companyID){
  const payload = {
    companyId: companyID
  };
  this.httpClient.post('http://localhost:8081/Providers/getall', {
      observe: 'response'
    }).pipe(map(response => response as Array<Provider>)
    ).subscribe(response => {
      this.eselectStatusSubject.next(201);
      response.forEach(element => {
        this.providerlist.push(element);
      });
    }, err => {
      this.eselectStatusSubject.next(err.status);
    });
  }



  getBenefitPlan(companyID: number) {
    const payload = {
      companyId: companyID
    };
    this.httpClient.post('http://localhost:8081/BenefitPlan/getall', payload, {
      observe: 'response'
    }).pipe(map(response => response.body as Array<BenefitPlan>)
    ).subscribe(response => {
      this.eselectStatusSubject.next(201);
      response.forEach(element => {
        this.benefit.push(element);
      });
    }, err => {
      this.eselectStatusSubject.next(err.status);
    });
  }

  saveEmployeeSelection(benefitPlanID: number, employeeID: number) {
    const payload = {
      benefitPlanId: benefitPlanID,
      employeeId: employeeID
    };
    this.httpClient.post('http://localhost:8081/EmployeeSelection', payload, {
      observe: 'response'
    }).subscribe(response => {
      this.eselectStatusSubject.next(201);
    }, err => {
      this.eselectStatusSubject.next(err.status);
    });
  }
  getPeteDental() {
    return localStorage.getItem('6');
  }
  getPeteVision() {
    return localStorage.getItem('5');
  }
  getPeteHealth() {
    return localStorage.getItem('4');
  }
  getArmandMedical() {
    return localStorage.getItem('1');
  }
  getArmandVision() {
    return localStorage.getItem('2');
  }
  getArmandDental() {
    return localStorage.getItem('3');
  }
  getWillDental() {
    return localStorage.getItem('9');
  }
  getWillMedical() {
    return localStorage.getItem('7');
  }
  getWillVision() {
    return localStorage.getItem('8');
  }
  getRetirement() {
    return localStorage.getItem('retirement');
  }

}




