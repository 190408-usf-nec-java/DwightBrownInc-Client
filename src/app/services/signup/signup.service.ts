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
      employeeemail: employeeemail,
      employeepassword:employeepassword,

    };// end payload

    this.httpClient.post('http://localhost:8080/Employee', payload, {
    }).subscribe(response => {
      this.signupStatusSubject.next(201);
    }, err => {
      this.signupStatusSubject.next(err.status);
    });


  }// method signup

}// class SignupService




