import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailZonePage } from './detail-zone';

@NgModule({
  declarations: [
    DetailZonePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailZonePage),
  ],
})
export class DetailZonePageModule {}
