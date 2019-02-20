import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VisualizacionPage } from '../visualizacion/visualizacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 consolas = [];
 consola = VisualizacionPage;
  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data, null, 3));
        if (data.hasOwnProperty('list_ads')){
          this.consolas = data['list_ads'];
        
          // this.http = data.list_ads;
 
        }
      }, error => {
        console.log(JSON.stringify(error));
      });

  }
  VerConsola(consola){
    this.navCtrl.push(this.consola, {consola: consola});
  }
}
  


