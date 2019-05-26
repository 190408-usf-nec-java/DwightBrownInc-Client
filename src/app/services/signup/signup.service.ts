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
  signup(firstname: string, lastname: string, email: string): void {

    const payload = {
      employeeFirstName: firstname,
      employeeLastName: lastname,
      employeeEmail: email

    };// end payload

    this.httpClient.post('http://localhost:8080/Employee', payload, {
    }).subscribe(response => {
      this.signupStatusSubject.next(201);
    }, err => {
      this.signupStatusSubject.next(err.status);
    });


  }// method signup

}// class SignupService




