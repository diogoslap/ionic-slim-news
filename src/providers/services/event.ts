import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../api';

@Injectable()
export class EventService{


  constructor(public api:ApiProvider) {
  }


  public getEvents(){
    return new Promise((resolve,reject)=>{
      this.api.get('/events').then((result:any) =>{
        resolve(result);
      }).catch(err => reject(err));
    })
  }

}
