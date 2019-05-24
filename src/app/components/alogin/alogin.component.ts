import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AloginService } from 'src/app/services/alogin/alogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit, OnDestroy {
  companyEmail = '';
  Password = '';
  loginResponse: Subscription;
  lastStatus = 201;

  constructor(private aloginService: AloginService, private router: Router ) { }

  ngOnInit() {
    this.aloginService.storeLocation();
    this.loginResponse = this.aloginService.$loginStatus.subscribe(status => {
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

//THIS IS A TEST

submit() {
  this.aloginService.alogin(this.companyEmail, this.Password);
}
}
