import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-zone',
  templateUrl: 'detail-zone.html',
})
export class DetailZonePage {
  listdetailz:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listdetailz = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailZonePage');
  }

}
