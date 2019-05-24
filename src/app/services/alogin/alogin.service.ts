import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AloginService {
  private loginStatusSubject = new Subject<number>();
  public $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }
  storeLocation() {
    localStorage.setItem('8', '../../../assets/PetesTotalCare/dental1.pdf');
    localStorage.setItem('9', '../../../assets/PetesTotalCare/vision1.pdf');
    localStorage.setItem('10', '../../../assets/PetesTotalCare/medical1.pdf');
    localStorage.setItem('13', '../../../assets/ArmandGroup/medical2.pdf');
    localStorage.setItem('12', '../../../assets/ArmandGroup/vision2.pdf');
    localStorage.setItem('11', '../../../assets/ArmandGroup/dental2.pdf');
    localStorage.setItem('5', '../../../assets/WillCross/dental3.pdf');
    localStorage.setItem('7', '../../../assets/WillCross/medical3.pdf');
    localStorage.setItem('6', '../../../assets/WillCross/vision3.pdf');
    localStorage.setItem('retirement', '../../../assets/PetesTotalCare/retirement1.pdf');
  }

  alogin(companyEmail: string, Password: string): void {
    const payload = {
      userEmail: companyEmail,
      password: Password
    };

    this.httpClient.post('http://localhost:8081/Company/login', payload, {
      observe: 'response'
    }).subscribe(response => {
      this.loginStatusSubject.next(201);
    }, err => {
      this.loginStatusSubject.next(err.status);
    });
  }
}
