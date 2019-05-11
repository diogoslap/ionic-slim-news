import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../api';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService{

  user:any;
  auth:boolean=false;
  constructor(public api:ApiProvider, public storage:Storage) {
  }


  public setData(user,jwt) {
    this.user = user;
    this.auth = false;
    this.user.auth = true;
    this.user.token = jwt;
    this.api.setToken(jwt);
    this.storage.set("user", this.user);
  }

  public getData() {
    return new Promise<User>((resolve, reject) => {
      this.storage.get("user").then(user => {
        if (user != undefined && user.auth != undefined) {
          resolve(user);
        } else {
          resolve(undefined);
        }
      });
    });
  }

  public login(user) {
    return new Promise((resolve,reject)=>{
      this.api.login("/auth/login", user).then((result: any) => {
        if (result.token != undefined){
          this.setData(result.user,result.token);
          resolve();
        }else{
          reject(result);
        }
      }).catch((err) => {
        reject(err);
      });
    })
  }

  public signup(user) {
    return new Promise((resolve,reject)=>{
      this.api.post("/auth/register", user).then((result: any) => {
        if (result.token != undefined){
          this.setData(result.user,result.token);
          resolve();
        }else{
          reject(result);
        }
      }).catch((err) => {
        reject(err);
      });
    })
  }

  public logout() {
    this.storage.set("user", null);
    this.user = {};
    this.api.setToken(null);
  }

}
