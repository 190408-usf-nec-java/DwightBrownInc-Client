import { Component, OnInit } from '@angular/core';
import { EselectionService } from 'src/app/services/eselection/eselection.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { BenefitPlan } from 'src/app/models/benefitplan';

@Component({
  selector: 'app-eselection',
  templateUrl: './eselection.component.html',
  styleUrls: ['./eselection.component.css']
})
export class EselectionComponent implements OnInit {
  public show = false;
  public pete1;
  public pete2;
  public pete3;
  public armand3;
  public armand2;
  public armand1;
  public will1;
  public will2;
  public will3;
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
  companyId;
  employeeBenefit = new Array<BenefitPlan>();

  constructor(private eselectionService: EselectionService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.eselectionService.getBenefitPlan(this.companyId);
    this.response = this.$viewStatus.subscribe(status => {
      if (status === 201) {
        alert('Insurance Chosen');
        this.router.navigateByUrl('aportal');
      } else {
        alert('Something went wrong');
        this.lastStatus = status;
      }
    });
  }
  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
    }
  }

  filter() {
    for (let i = 0; i < 10; i++) {

      if (Number(localStorage.key(1)) === this.employeeBenefit[i].providerId) {
        this.armand1 = true;
      }
      if (Number(localStorage.key(2)) === this.employeeBenefit[i].providerId) {
        this.armand2 = true;
      }
      if (Number(localStorage.key(3)) === this.employeeBenefit[i].providerId) {
        this.armand3 = true;
      }
      if (Number(localStorage.key(4)) === this.employeeBenefit[i].providerId) {
        this.pete1 = true;
      }
      if (Number(localStorage.key(5)) === this.employeeBenefit[i].providerId) {
        this.pete2 = true;
      }
      if (Number(localStorage.key(6)) === this.employeeBenefit[i].providerId) {
        this.pete3 = true;
      }
      if (Number(localStorage.key(7)) === this.employeeBenefit[i].providerId) {
        this.will1 = true;
      }
      if (Number(localStorage.key(8)) === this.employeeBenefit[i].providerId) {
        this.will2 = true;
      }
      if (Number(localStorage.key(9)) === this.employeeBenefit[i].providerId) {
        this.will3 = true;
      }

    }
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
