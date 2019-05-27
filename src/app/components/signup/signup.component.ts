import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() employeeEmail = '';
  @Input() employeePassword = '';
  @Input() confirmEmployeePassword = '';

  signupResponse: Subscription;
  lastStatus = 201;

  constructor(private signUpService: SignupService, private router: Router) { }

  ngOnInit() {
    this.signupResponse = this.signUpService.$signupStatus.subscribe(status =>{
     if (status === 201){
       alert(' Congratulations Signup Successfull');
       this.router.navigateByUrl('login');
     } else {
       alert('Sorry Signup is Unsuccessful');
       this.lastStatus = status;
     }

    });

}

  ngOnDestroy(): void {
    if(this.signupResponse){
      this.signupResponse.unsubscribe();
    }//

  }// end ngOnDestroy

  submit(){
    console.log(this.employeeEmail);
    console.log(this.employeePassword);

   if(this.employeePassword ===this.confirmEmployeePassword){
    this.signUpService.signup(this.employeeEmail, this.employeePassword);
}


  }

}
