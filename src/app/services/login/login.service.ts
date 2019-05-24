import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(employeeEmail: string, Password: string): void {
    const payload = {
      userEmail: employeeEmail,
      password: Password
    };

    this.httpClient.post('http://localhost:8081/Employee/login', payload, {
      observe: 'response'
    }).subscribe(response => {
      this.loginStatusSubject.next(201);
    }, err => {
      this.loginStatusSubject.next(err.status);
    });

  }
}
