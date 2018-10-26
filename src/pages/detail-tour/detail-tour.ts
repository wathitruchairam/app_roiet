import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-tour',
  templateUrl: 'detail-tour.html',
 
})
export class DetailTourPage {
  listdetailTour:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listdetailTour = this.navParams.get("item");
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTourPage');
  }

}
