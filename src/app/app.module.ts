import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TreePage } from '../pages/tree/tree';
import { FourPage } from '../pages/four/four';
import { TwoPage } from '../pages/two/two';
import { HttpModule } from '@angular/http';
import { FivePage } from '../pages/five/five';
import { LoginPage } from '../pages/login/login';
import { NewsProvider } from '../providers/news/news';
import { DetailPage } from '../pages/detail/detail';
import { DetailZonePage } from '../pages/detail-zone/detail-zone';
import { DetailTourPage } from '../pages/detail-tour/detail-tour';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TwoPage,
    TreePage,
    FourPage,
    FivePage,
    LoginPage,
    TabsPage,
    DetailPage,
    DetailZonePage,
    DetailTourPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement:'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TwoPage,
    TreePage,
    FourPage,
    FivePage,
    LoginPage,
    TabsPage,
    DetailPage,
    DetailZonePage,
    DetailTourPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}
