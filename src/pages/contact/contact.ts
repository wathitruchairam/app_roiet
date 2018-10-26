import { Component } from '@angular/core';
import { NavController ,ToastController,AlertController} from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    name:any;
    subject:any;
    detail:any;
    email:any;
    tel:any;
  datalist:any;
  constructor(public navCtrl: NavController,public toast:ToastController,public http: Http,public alertCtrl: AlertController) {

  }
  getContact(){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new ResponseOptions({headers:headers});
    let body = {name:this.name,subject:this.subject,detail:this.detail,email:this.email,tel:this.tel}; 
    this.http.post('http://localhost/apps/setContact.php',body,options)
    .subscribe(
      data=>{
        console.log("success");
      }
    )
  }

}
