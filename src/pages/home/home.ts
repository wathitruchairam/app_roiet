import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsProvider } from '../../providers/news/news';
import { ContactPage } from '../contact/contact';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datalist:any;
  constructor(public navCtrl: NavController,public http:Http,public newsProvider : NewsProvider) {

  }

  
  goContact(){
    this.navCtrl.push(ContactPage);
  }

  goDetail(_n){
    this.navCtrl.push(DetailPage,{item:_n});
  }

  ionViewWillEnter(){
    this.newsProvider.getNews()
    .then((data:any)=>{
    this.datalist=data;
    });
  }
}
