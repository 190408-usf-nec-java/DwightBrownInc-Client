import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname = '';
  lastname = '';
  email = '';
  signupResponse: Subscription;
  lastStatus = 201;

  constructor(private signUpService: SignupService ) { }

  ngOnInit() {
    this.signupResponse = this.signUpService.$signUpStatus.subscribe(status =>
     if (status === 201){
       alert(' Congratulations Signup Succesfull');
     } else{
       alert('Sorry Signup is Unsuccessful');
       this.lastStatus = status;
     } );
  }

}
