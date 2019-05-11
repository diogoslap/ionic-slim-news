import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class ApiProvider {
  url = "http://localhost:8000/v1";
  headers:any;

  constructor(public http: Http, public storage:Storage) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  setToken(token:any=null){
    if(token == "" || token == null){
      this.headers.delete("X-Token");
    }else{
      this.headers.set('X-Token', token);
      this.headers.delete("Authorization");
    }
  }

  get(endpoint: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+ endpoint,{headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
      }, (err) => {
          reject(err);
      });
    });
  }

  post(endpoint: string, body: any) {
    return new Promise((resolve, reject) => {
       this.http.post(this.url+endpoint, JSON.stringify(body),{headers: this.headers})
       .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err.json())
        });
    });
  }
  login(endpoint: string, creds: any){
    return new Promise((resolve, reject) => {
      let btoa = window.btoa(creds.user+":"+creds.password)
      this.headers.delete("X-Token");
      this.headers.set("Authorization","Basic "+btoa);
      this.http.get(this.url+endpoint,{headers: this.headers})
      .map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, err => {
         reject(err.json())
       });
   });
  }

  put(endpoint: string, body: any){
    return new Promise((resolve, reject) => {
       this.http.put(this.url+endpoint, JSON.stringify(body),{headers: this.headers})
       .map(res => res.json(),err => err.json())
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err.json())
        });
    });
  }

  delete(endpoint: string) {
    return this.http.delete(this.url + endpoint);
  }

}
