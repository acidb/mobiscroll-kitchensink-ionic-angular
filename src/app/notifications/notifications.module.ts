import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { MbscModule } from '@mobiscroll/angular';
import { SettingsSectionModule } from '../settings-section/settings-section.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
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
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
