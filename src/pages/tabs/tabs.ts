import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { FavoritosPage } from '../favoritos/favoritos';
import { MascotasPage } from '../mascotas/mascotas';
import { ElectronicsPage } from '../electronics/electronics';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1 = HomePage;
tab2 = MascotasPage;
tab3 = ElectronicsPage;
tab4 = FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
