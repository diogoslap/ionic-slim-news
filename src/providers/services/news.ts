import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../api';

@Injectable()
export class NewsService{


  constructor(public api:ApiProvider) {
  }


  public getNews(){
    return new Promise((resolve,reject)=>{
      this.api.get('/news').then((result:any) =>{
        resolve(result);
      }).catch(err => reject(err));
    })
  }

}
