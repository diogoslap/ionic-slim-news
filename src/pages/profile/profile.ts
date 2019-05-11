import { LoginPage } from './../login/login';

import { UserService } from './../../providers/services/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserService) {
  }

  ionViewDidLoad() {
    this.userService.getData().then((data)=>{
      this.user = data;
    })
  }

  logout(){
    this.userService.logout();
    this.navCtrl.setRoot(LoginPage)
  }

}
