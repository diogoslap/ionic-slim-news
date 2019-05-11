import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class MessageProvider {

  constructor(public alertCtrl: AlertController) {

  }
  alertMessage(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ["OK"]
    });
    alert.present();
  }

}
