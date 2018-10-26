import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  u_email:any;
  u_password:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,
    public alertCtrl: AlertController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getLogin(){
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new ResponseOptions({headers:headers});
  let body = {u_email:this.u_email,u_password:this.u_password};

  this.http.post("http://127.0.0.1/apps/getLogin.php",body,options)
  //ส่งค่ามาที่data
  .subscribe(data=>{
    if(data.json()[0].u_id!=null){
      this.loginSuccess();
      this.navCtrl.setRoot(TabsPage);
    }else{
      this.Notlogin();
    }
  },error=>{
        console.log("เชื่อมต่อไม่ได้")
      })
  }

  Notlogin() {
    const alert = this.alertCtrl.create({
      title: 'ล็อกอินไม่สำเร็จ!',
      subTitle: 'กรุณาตรวจสอบ รหัสผ่าน หรือ อีเมล',
      buttons: ['OK']
    });
    alert.present();
  }
  loginSuccess() {
    const alert = this.alertCtrl.create({
      title: 'ล็อกอินสำเร็จ',
      subTitle: 'ยินดีต้อนรับสู่',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
