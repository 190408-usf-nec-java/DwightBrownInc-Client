import { Component, OnInit } from '@angular/core';
import { EselectionService } from 'src/app/services/eselection/eselection.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { BenefitPlan } from 'src/app/models/benefitplan';
import { filter } from 'rxjs/operators';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-eselection',
  templateUrl: './eselection.component.html',
  styleUrls: ['./eselection.component.css']
})
export class EselectionComponent implements OnInit {
  public show = false;
  public pete1 = true;
  public pete2 = false;
  public pete3 = false;
  public armand3 = false;
  public armand2 = false;
  public armand1 = false;
  public will1 = false;
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
  Url: any;
  companyId = 1;
  employeeBenefit = new Array<BenefitPlan>();
  public providers = new Array<Provider>();
  constructor(private eselectionService: EselectionService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.eselectionService.getProviderList(this.companyId);
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
    console.log(this.employeeBenefit);
    console.log(this.providers);
    console.log(localStorage.key(1));
    this.eselectionService.providerlist.forEach(element => {
      this.providers.push(element);

    });
  }
  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
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
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getPeteDental());
  }
  PeteVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getPeteVision());
  }
  PeteMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getPeteHealth());
  }
  ArmandDental() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getArmandDental());
  }
  ArmandVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getArmandVision());
  }
  ArmandMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getArmandMedical());
  }
  WillDental() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getWillDental());
  }
  WillMedical() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getWillMedical());
  }
  WillVision() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getWillVision());
  }
  Retirement() {
    return this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.eselectionService.getRetirement());
  }
}
