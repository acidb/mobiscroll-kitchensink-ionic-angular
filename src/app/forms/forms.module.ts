import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsPage } from './forms.page';
import { MbscModule, MbscFormsModule } from '@mobiscroll/angular';
import { SettingsSectionModule } from '../settings-section/settings-section.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FormsPage
  }
];

@NgModule({
  imports: [
    MbscModule,
    SettingsSectionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormsPage]

})
export class FormsPageModule {}
