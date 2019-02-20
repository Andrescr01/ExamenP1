import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VermasPage } from '../vermas/vermas';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {
  mascotas = [];
  mascota = VermasPage;
   constructor(public navCtrl: NavController,
     public http: HttpClient) {
       this.http.get('/v1/nga/api/v1/public/klfst?&category=8020&offset=1&lim=29&lang=es')
       .subscribe(data => {
         //console.log(JSON.stringify(data, null, 3));
         if (data.hasOwnProperty('list_ads')){
           this.mascotas = data['list_ads'];
         
           // this.http = data.list_ads;
  
         }
       }, error => {
         console.log(JSON.stringify(error));
       });
 
   }
   VerConsola(mascota){
     this.navCtrl.push(this.mascota, {mascota: mascota});
   }
 }