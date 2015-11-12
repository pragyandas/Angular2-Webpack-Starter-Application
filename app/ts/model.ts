export class Category {
  name: string;
  companies: Company[];
  companiesVisible:boolean;
}
export class Company {
  name: string;
  parentName:string;
  funds: Fund[];
  fundsVisible:boolean;
}
export class Fund {
  data: any[];
}
