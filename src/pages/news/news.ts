import { NewsService } from './../../providers/services/news';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsService:NewsService) {

  }

  ionViewDidLoad() {
    this.newsService.getNews().then((data)=>{
      this.news = data;
    })
  }

}
