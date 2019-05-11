import { ProfilePage } from './../pages/profile/profile';
import { ValidationPage } from "./../providers/validators/ValidationPage";
import { UserService } from "./../providers/services/user";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { EventsPage } from "../pages/events/events";
import { NewsPage } from "../pages/news/news";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewsPage;

  pages: Array<{
    title: string;
    component: any;
    icon: any;
    authentication: boolean;
  }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userService: UserService,
    public vOpenPage: ValidationPage
  ) {

    this.userService.getData().then(data => {
      if (data != undefined) {
        this.userService.setData(data, data.token);
      }
      this.initializeApp();
    });


    this.pages = [
      {
        title: "News",
        component: NewsPage,
        icon: "paper",
        authentication: false
      },
      {
        title: "Events",
        component: EventsPage,
        icon: "contacts",
        authentication: true
      },
      {
        title: "Profile",
        component: ProfilePage,
        icon: "person",
        authentication: true
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.vOpenPage.checkOpen(page.authentication,this.nav).then(() => {
      this.nav.setRoot(page.component);
    });
  }
}
