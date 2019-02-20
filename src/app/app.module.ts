import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { VisualizacionPage } from '../pages/visualizacion/visualizacion';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';
import { MascotasPage } from '../pages/mascotas/mascotas';
import { VermasPage } from '../pages/vermas/vermas';
import { ElectronicsPage } from '../pages/electronics/electronics';
import { VerelecPage } from '../pages/verelec/verelec';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualizacionPage,
    FavoritosPage,
    TabsPage,
    MascotasPage,
    VermasPage,
    ElectronicsPage,
    VerelecPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualizacionPage,
    FavoritosPage,
    TabsPage,
    MascotasPage,
    VermasPage,
    ElectronicsPage,
    VerelecPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
