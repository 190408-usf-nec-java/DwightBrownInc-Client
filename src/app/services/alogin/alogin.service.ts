import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AloginService {
  private loginStatusSubject = new Subject<number>();
  public $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }
  storeLocation() {
    localStorage.setItem('6', '../../../assets/PetesTotalCare/dental1.pdf');
    localStorage.setItem('5', '../../../assets/PetesTotalCare/vision1.pdf');
    localStorage.setItem('4', '../../../assets/PetesTotalCare/medical1.pdf');
    localStorage.setItem('1', '../../../assets/ArmandGroup/medical2.pdf');
    localStorage.setItem('2', '../../../assets/ArmandGroup/vision2.pdf');
    localStorage.setItem('3', '../../../assets/ArmandGroup/dental2.pdf');
    localStorage.setItem('9', '../../../assets/WillCross/dental3.pdf');
    localStorage.setItem('7', '../../../assets/WillCross/medical3.pdf');
    localStorage.setItem('8', '../../../assets/WillCross/vision3.pdf');
    localStorage.setItem('retirement', '../../../assets/PetesTotalCare/retirement1.pdf');
  }

  alogin(companyEmail: string, Password: string): void {
    const payload = {
      userEmail: companyEmail,
      password: Password
    };

    this.httpClient.post('http://localhost:8081/Company/login', payload, {
      observe: 'response'
    }).pipe(map(response => response.body as Company))
      .subscribe(response => {
        console.log(response);
        localStorage.setItem('token', JSON.stringify(response));
      this.loginStatusSubject.next(201);
    }, err => {
      this.loginStatusSubject.next(err.status);
    });
  }
}
