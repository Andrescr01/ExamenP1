import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectronicsPage } from './electronics';

@NgModule({
  declarations: [
    ElectronicsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectronicsPage),
  ],
})
export class ElectronicsPageModule {}
