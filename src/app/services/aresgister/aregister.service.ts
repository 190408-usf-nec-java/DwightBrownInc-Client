import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AregisterService {
  private aregisterStatusSubject = new Subject<number>();
  public $aregisterStatus = this.aregisterStatusSubject.asObservable();
  constructor(private httpClient: HttpClient) { }

  aregister(firstname: string, lastname: string, email: string): void {
    const payload = {
      employeeFirstName: firstname,
      employeeLastName: lastname,
      employeeEmail: email

    };
    this.httpClient.post('http://localhost:8080/Employee', payload, {
    }).subscribe(response => {
      this.aregisterStatusSubject.next(201);
    }, err => {
      this.aregisterStatusSubject.next(err.status);
    });
  }
}
