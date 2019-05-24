import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprovidersService {
  private resolveStatusSubject = new Subject<number>();
  public $resolveStatus = this.resolveStatusSubject.asObservable();
  private selection;
  constructor(private httpClient: HttpClient) { }

  aProviderSelection(companyID: number, providerID: number) {
    const payload = {
      companyId: companyID,
      providerId: providerID,
    };
    this.httpClient.post('http://localhost:8081/BenefitPlan', this.selection, {
      observe: 'response'
    }).subscribe(response => {
      this.resolveStatusSubject.next(201);
    }, err => {
      this.resolveStatusSubject.next(err.status);
    });
  }


  getPeteDental() {
    return localStorage.getItem('6');
  }
  getPeteVision() {
    return  localStorage.getItem('5');
  }
  getPeteHealth() {
    return  localStorage.getItem('4');
  }
  getArmandMedical() {
    return  localStorage.getItem('1');
  }
  getArmandVision() {
    return  localStorage.getItem('2');
  }
  getArmandDental() {
    return  localStorage.getItem('3');
  }
  getWillDental() {
    return  localStorage.getItem('9');
  }
  getWillMedical() {
    return  localStorage.getItem('7');
  }
  getWillVision() {
    return  localStorage.getItem('8');
  }
  getRetirement() {
    return  localStorage.getItem('retirement');
  }




  
}
