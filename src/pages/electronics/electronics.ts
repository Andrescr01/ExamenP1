import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerelecPage } from '../verelec/verelec';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ElectronicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-electronics',
  templateUrl: 'electronics.html',
})
export class ElectronicsPage {
  dispositivos = [];
  dispositivo = VerelecPage;
   constructor(public navCtrl: NavController,
     public http: HttpClient) {
       this.http.get('/v1/nga/api/v1/public/klfst?&category=5020&offset=1&lim=29&lang=es')
       .subscribe(data => {
         //console.log(JSON.stringify(data, null, 3));
         if (data.hasOwnProperty('list_ads')){
           this.dispositivos = data['list_ads'];
         
           // this.http = data.list_ads;
  
         }
       }, error => {
         console.log(JSON.stringify(error));
       });
 
   }
   VerConsola(dispositivo){
     this.navCtrl.push(this.dispositivo, {dispositivo: dispositivo});
   }
 }