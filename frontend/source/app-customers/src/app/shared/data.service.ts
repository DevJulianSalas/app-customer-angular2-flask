import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'




@Injectable()
export class DataService {
  private url:string = '/data/customers.json';
  
  constructor(private http: Http) { }
  
  fetchCustomers(){
    return this.http.get(this.url)  // return a observable
                     .map(this.extracData)
                      //map is on operator of RxJS
  }
  private extracData(res: Response){
    let body = res.json();
    return body || {};
  }

}
