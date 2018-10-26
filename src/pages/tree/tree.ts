import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailZonePage } from '../detail-zone/detail-zone';
/**
 * Generated class for the TreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tree',
  templateUrl: 'tree.html',
})
export class TreePage {
  datalistZone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.getZone()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreePage');
  }

  getZone(){
    this.http.post('http://192.168.1.25/apps/getZone.php',null,null)
    .subscribe(
      data=>{
        this.datalistZone = data.json();
        console.log(data.json());
      }
    )
  }
  goDetailzone(_Z){
    this.navCtrl.push(DetailZonePage,{item:_Z});
  }
}
