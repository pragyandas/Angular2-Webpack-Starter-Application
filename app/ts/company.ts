import {Component,Input,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {MutualFundService} from './mutualFundService';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Company} from './model';
import {FundsComponent} from './funds';

@Component({
  selector: 'company',
  templateUrl: '../app/companyTemplate.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,FundsComponent],
  providers: [MutualFundService],
  inputs:['companies']
})
export class CompanyComponent {
  constructor(private mutualFundService: MutualFundService) {
  }
  @Input()
  companies:Company[];

  getFunds(company:Company){
    if(company.funds.length===0){
      this.mutualFundService.getFunds(company.parentName,company.name).subscribe((results)=>{
        JSON.parse(results._body).forEach((fund)=>{
          company.funds.push(fund);
        })
      })
    }
    else{
      company.fundsVisible=!company.fundsVisible;
    }
    event.stopPropagation();
  }
}
