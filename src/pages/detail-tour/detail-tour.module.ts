import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTourPage } from './detail-tour';

@NgModule({
  declarations: [
    DetailTourPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTourPage),
  ],
})
export class DetailTourPageModule {}
