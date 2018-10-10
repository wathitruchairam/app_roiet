import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datalist:any;
  constructor(public navCtrl: NavController,public http:Http) {
    this.getNews();
  }

  getNews(){
    this.http.post('http://localhost/apps/getNews.php',null,null)
    .subscribe(
      data=>{
        this.datalist = data.json();
        console.log(data.json());
      }
    )
  }
}
