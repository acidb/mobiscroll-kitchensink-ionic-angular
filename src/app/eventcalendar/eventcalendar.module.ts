import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { EventcalendarPage } from './eventcalendar.page';
import { SettingsSectionModule } from '../settings-section/settings-section.module';

const routes: Routes = [
  {
    path: '',
    component: EventcalendarPage
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
  declarations: [EventcalendarPage]
})
export class EventcalendarPageModule {}
