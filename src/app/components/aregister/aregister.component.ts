import { Component, OnInit, OnDestroy } from '@angular/core';
import { AregisterService } from 'src/app/services/aresgister/aregister.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aregister',
  templateUrl: './aregister.component.html',
  styleUrls: ['./aregister.component.css']
})
export class AregisterComponent implements OnInit, OnDestroy {
  firstname = '';
  lastname = '';
  email = '';
  aregisterResponse: Subscription;
  lastStatus = 201;
  constructor(private aregisterService: AregisterService) { }

  ngOnInit() {
    this.aregisterResponse = this.aregisterService.$aregisterStatus.subscribe(status => {
      // do something with status here
      if (status === 201) {
        alert('Employee Registered');
      } else {
        alert('Employee not created');
        this.lastStatus = status;
      }
    });
  }
  ngOnDestroy() {
    if (this.aregisterResponse) {
      this.aregisterResponse.unsubscribe();
    }
  }
  submit() {
    // call the signupService signup method
    this.aregisterService.aregister(this.email, this.firstname, this.lastname);
  }

}
