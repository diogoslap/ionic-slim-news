import { MessageProvider } from './../providers/message';
import { SignupPage } from './../pages/signup/signup';
import { ProfilePage } from './../pages/profile/profile';
import { ValidationPage } from './../providers/validators/ValidationPage';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api';
import { NewsService } from '../providers/services/news';
import { UserService } from '../providers/services/user';
import { EventService } from '../providers/services/event';




import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    NewsPage,
    LoginPage,
    ProfilePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    EventsPage,
    LoginPage,
    ProfilePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    NewsService,
    UserService,
    EventService,
    ValidationPage,
    MessageProvider
  ]
})
export class AppModule {}
