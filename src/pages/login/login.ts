import { MessageProvider } from './../../providers/message';
import { SignupPage } from './../signup/signup';
import { UserService } from "./../../providers/services/user";
import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { NewsPage } from "../news/news";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public formLogin: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public messageProvider:MessageProvider,
    public userService: UserService
  ) {
    this.formLogin = this.formBuilder.group({
      user: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  basicLogin() {
    let user = this.formLogin.value;
    let loading = this.loadingCtrl.create({
      content: "Logging In. Wait..."
    });

    this.userService
      .login(user)
      .then(() => {
        loading.dismiss();
        this.navCtrl.setRoot(NewsPage);
      })
      .catch(err => {
        console.log(err);
        loading.dismiss();
        let title: string = "Login Failed!";
        let subTitle: string =
          "Ops !!! Invalid email or password. Try again!";
          this.messageProvider.alertMessage(title,subTitle)
      });
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
