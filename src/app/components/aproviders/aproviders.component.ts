import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AprovidersService } from 'src/app/services/aproviders/aproviders.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aproviders',
  templateUrl: './aproviders.component.html',
  styleUrls: ['./aproviders.component.css']
})
export class AprovidersComponent implements OnInit {
  public show = false;
  public pete1 = true;
  public pete2 = true;
  public pete3 = true;
  public armand3 = true;
  public armand2 = true;
  public armand1 = true;
  public will1 = true;
  public will2 = true;
  public will3 = true;
  public buttonName: any = 'Expand';
  public show1 = false;
  public buttonName1: any = 'Expand';
  public show2 = false;
  public buttonName2: any = 'Expand';
  private viewStatusSubject = new Subject<number>();
  response: Subscription;
  public $viewStatus = this.viewStatusSubject.asObservable();
  lastStatus = 201;
  //splitCache = sessionStorage.getItem('cache').split(' ');
  companyID = 0;
  Url: any;
  //companyName = this.splitCache[1];


  constructor(private aproviderService: AprovidersService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {

    this.response = this.$viewStatus.subscribe(status => {
      if (status === 201) {
        alert('Insurance Chosen');
        this.router.navigateByUrl('aportal');
      } else {
        this.lastStatus = status;
      }
    });
  }
  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
    }
  }
  aProviderSelection(providerId ) {
    this.aproviderService.aProviderSelection(this.companyID, providerId);
  }
  Submit() {
    this.aproviderService.Submit();
  }
  hidePete1() {
    this.pete1 = !this.pete1;
  }
  hidePete2() {
    this.pete2 = !this.pete2;
  }
  hidePete3() {
    this.pete3 = !this.pete3;
  }
  hideArmand1() {
    this.armand1 = !this.armand1;
  }
  hideArmand2() {
    this.armand2 = !this.armand2;
  }
  hideArmand3() {
    this.armand3 = !this.armand3;
  }
  hideWill1() {
    this.will1 = !this.will1;
  }
  hideWill2() {
    this.will2 = !this.will2;
  }
  hideWill3() {
    this.will3 = !this.will3;
  }


  toggle() {
    this.show = !this.show;
    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Collapse';
    } else {
      this.buttonName = 'Expand';
    }
  }
  toggle1() {
    this.show1 = !this.show1;
    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show1) {
      this.buttonName1 = 'Collapse';
    } else {
      this.buttonName1 = 'Expand';
    }
  }
  toggle2() {
    this.show2 = !this.show2;
    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show2) {
      this.buttonName2 = 'Collapse';
    } else {
      this.buttonName2 = 'Expand';
    }
  }
  PeteDental() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getPeteDental());
  }
  PeteVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getPeteVision());
  }
  PeteMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getPeteHealth());
  }
  ArmandDental() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getArmandDental());
  }
  ArmandVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getArmandVision());
  }
  ArmandMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getArmandMedical());
  }
  WillDental() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getWillDental());
  }
  WillMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getWillMedical());
  }
  WillVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getWillVision());
  }
  Retirement() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.aproviderService.getRetirement());
  }
}
