import {Component,Input,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {MutualFundService} from './mutualFundService';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Fund} from './model';

@Component({
  selector: 'fund',
  templateUrl: '../app/fundsTemplate.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [MutualFundService],
  inputs:['funds'],
  styleUrls:['../app/appStyle.css']
})
export class FundsComponent {
  constructor(private mutualFundService: MutualFundService) {
   mutualFundService.getKeys();
   mutualFundService.keys.subscribe((keys) => {
    this.keys=keys;
   });
  }

  @Input()
  funds:Fund[];

  keys:string[];
}
