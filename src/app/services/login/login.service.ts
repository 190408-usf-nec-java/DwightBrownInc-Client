import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../../models/Employee'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public $loginStatus = this.loginStatusSubject.asObservable();
  public employee: Employee;

  constructor(private httpClient: HttpClient) { }

  login(employeeEmail: string, Password: string): void {
    const payload = {
      userEmail: employeeEmail,
      password: Password
    };

    this.httpClient.post('http://localhost:8081/Employee/login', payload, {
      observe: 'response'
    }).pipe(map(response => response.body as Employee)
    ).subscribe(response => {
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response));
      this.loginStatusSubject.next(201);
    }, err => {
      this.loginStatusSubject.next(err.status);
    });
  }
}
