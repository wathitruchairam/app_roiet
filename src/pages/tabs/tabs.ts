import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TwoPage } from '../two/two';
import { TreePage } from '../tree/tree';
import { FourPage } from '../four/four';
import { FivePage } from '../five/five';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TwoPage;
  tab3Root = TreePage;
  tab4Root = FourPage;
  tab5Root = FivePage;

  constructor() {

  }
}
