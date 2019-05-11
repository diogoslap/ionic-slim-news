import { EventService } from './../../providers/services/event';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService:EventService) {
  }

  ionViewDidLoad() {
    this.eventService.getEvents().then((data)=>{
      this.events = data;
    }).catch((err)=>{
      console.log(err.status)
    })
  }

}
