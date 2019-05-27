import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupStatusSubject = new Subject<number>();
  public $signupStatus = this.signupStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }
  signup(employeeemail: string, employeepassword: string): void {

    const payload = {
      employeeEmail: employeeemail,
      employeePassword:employeepassword,

    }; // end payload

    this.httpClient.put('http://localhost:8080/Employee/createPassword', payload, {
    }).subscribe(response => {
      this.signupStatusSubject.next(201);
    }, err => {
      this.signupStatusSubject.next(err.status);
    });


  }// method signup

}// class SignupService




