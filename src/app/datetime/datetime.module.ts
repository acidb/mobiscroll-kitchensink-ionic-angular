import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatetimePage } from './datetime.page';
import { MbscModule } from '@mobiscroll/angular';
import { SettingsSectionModule } from '../settings-section/settings-section.module';

const routes: Routes = [
  {
    path: '',
    component: DatetimePage
  }
];

@NgModule({
  imports: [
    MbscModule,
    SettingsSectionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatetimePage]
})
export class DatetimePageModule {}
