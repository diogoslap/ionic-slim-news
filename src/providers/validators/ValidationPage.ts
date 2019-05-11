import { LoginPage } from "./../../pages/login/login";
import { Injectable } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserService } from "../services/user";

@Injectable()
export class ValidationPage {
  userAuth:boolean=false;
  constructor(public userService: UserService) {
  }

  checkOpen(auth: boolean = false, navCtrl:NavController) {
    return new Promise(async(resolve) => {
      if (auth) {
        await this.loadUser();
        if (!this.userAuth) {
          navCtrl.setRoot(LoginPage);
        } else {
          resolve(true);
        }
      } else {
        resolve(true);
      }
    });
  }

  loadUser(){
    return new Promise(resolve => {
      this.userService.getData().then((data)=>{
        if(data != undefined){
          this.userAuth = data.auth;
        }else{
          this.userAuth =  false
        }
        resolve();
      })
    })
  }
}
