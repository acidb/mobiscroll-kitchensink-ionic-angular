import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsSectionComponent } from './settings-section.component';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SettingsSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbscModule
  ],
  exports: [SettingsSectionComponent]
})
export class SettingsSectionModule { }
