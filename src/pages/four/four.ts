import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailTourPage } from '../detail-tour/detail-tour';
/**
 * Generated class for the FourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-four',
  templateUrl: 'four.html',
})
export class FourPage {
  datalistTour:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.getTour()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourPage');
  }
  getTour(){
    this.http.post('http://192.168.1.25/apps/getTour.php',null,null)
    .subscribe(
      data=>{
        this.datalistTour = data.json();
        console.log(data.json());
      }
    )
  }
  goDetailtour(_T){
    this.navCtrl.push(DetailTourPage,{item:_T});
  }
}
