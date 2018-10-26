import { Http } from '@angular//http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
url:string='http://192.168.1.25/apps/getNews.php'
  constructor(public http: Http) {
    // console.log('Hello NewsProvider Provider');
  }

  getNews(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.url)
      .map(res =>res.json())
      .subscribe(data =>{
        resolve(data);
      },error =>{
        reject(error);
      })
    });

  }
}
