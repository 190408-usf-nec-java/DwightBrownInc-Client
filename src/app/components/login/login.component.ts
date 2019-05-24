import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeEmail = '';
  Password = '';
  loginResponse: Subscription;
  lastStatus = 201;

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      // do something with status here
      if (status === 201) {
        this.router.navigateByUrl('aportal');
      } else {
        // set status to lastStatus to display appripraite error mesage
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }

  submit() {
    this.loginService.login(this.employeeEmail, this.Password);
  }

}
