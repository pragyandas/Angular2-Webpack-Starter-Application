import {Http,Headers} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';
import {Category,Company,Fund} from './model';

@Injectable()
export class MutualFundService{
  constructor(private http:Http){
  }

  keys:Rx.Subject<string[]>=new Rx.Subject<string[]>();
  categories:Rx.Subject<Category[]>=new Rx.Subject<Category[]>();
  // companies:Rx.Subject<Company[]>=new Rx.Subject<Company[]>();
  // funds:Rx.Subject<Fund[]>=new Rx.Subject<Fund[]>();

  getKeys(){
    this.http.get('http://localhost:3000/api/keys',{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).subscribe((results)=>{
        this.keys.next(<string[]>JSON.parse(results._body));
    });
  }

  getAllCategories(){
    this.http.get('http://localhost:3000/api/category',{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).map((results)=>{
      return JSON.parse(results._body).map((category)=>{
        return <Category>{name:<string>category,companiesVisible:true,companies:[]};
      });
    }).subscribe((categories)=>{
      this.categories.next(categories);
    });
  }

  getCompanies(categoryName:string){
    var payload={category:categoryName};
    return this.http.post('http://localhost:3000/api/company',JSON.stringify(payload),{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }

  getFunds(categoryName:string,companyName:string){
    var payload={category:categoryName,company:companyName};
    return this.http.post('http://localhost:3000/api/funds',JSON.stringify(payload),{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }
}
