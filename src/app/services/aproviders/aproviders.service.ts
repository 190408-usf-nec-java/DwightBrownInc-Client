import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprovidersService {
  private resolveStatusSubject = new Subject<number>();
  public $resolveStatus = this.resolveStatusSubject.asObservable();
  private selection = new Array<any>();
  constructor(private httpClient: HttpClient) { }
  aProviderSelection(companyID: number, providerId: number) {
    const payload = {
      companies: companyID,
      provider: providerId,
    };
    this.selection.push(payload);
  }
  Submit() {
    this.httpClient.post('http://localhost:8081/BenefitPlan', this.selection, {
      observe: 'response'
    }).subscribe(response => {
      this.resolveStatusSubject.next(200);
    }, err => {
      this.resolveStatusSubject.next(err.status);
    });
  }


  getPeteDental() {
    return localStorage.getItem('8');
  }
  getPeteVision() {
    return  localStorage.getItem('9');
  }
  getPeteHealth() {
    return  localStorage.getItem('10');
  }
  getArmandMedical() {
    return  localStorage.getItem('13');
  }
  getArmandVision() {
    return  localStorage.getItem('12');
  }
  getArmandDental() {
    return  localStorage.getItem('11');
  }
  getWillDental() {
    return  localStorage.getItem('5');
  }
  getWillMedical() {
    return  localStorage.getItem('7');
  }
  getWillVision() {
    return  localStorage.getItem('6');
  }
  getRetirement() {
    return  localStorage.getItem('retirement');
  }




  
}
