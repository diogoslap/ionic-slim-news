import { MessageProvider } from './../../providers/message';
import { NewsPage } from './../news/news';
import { UserService } from './../../providers/services/user';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  public formSignup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public userService:UserService,
    public messageProvider:MessageProvider
  ) {
    this.formSignup = this.formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      confirm_password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });
  }

  ionViewDidLoad() {
  }

  signup() {
    if (this.formSignup.value.password != this.formSignup.value.confirm_password) {
      this.messageProvider.alertMessage("Warning","Passwords are not the same.");
    }else{
      let user = {
        username: this.formSignup.value.username,
        password: this.formSignup.value.password
      };

      let loading = this.loadingCtrl.create({
        content: "Signing in. Wait..."
      });

      loading.present();

      this.userService
      .signup(user)
      .then(() => {
        loading.dismiss();
        this.navCtrl.setRoot(NewsPage);
      })
      .catch(err => {
        console.log(err);
        loading.dismiss();
        let title: string = "Signup Failed!";
        let subTitle: string ="Can't signup, please try again or another username.";
        this.messageProvider.alertMessage(title,subTitle)
      });
    }
  }
}
