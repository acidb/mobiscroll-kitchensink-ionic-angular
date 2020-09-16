import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'eventcalendar',
    loadChildren: './eventcalendar/eventcalendar.module#EventcalendarPageModule'
  },
  { 
    path: 'calendar', 
    loadChildren: './calendar/calendar.module#CalendarPageModule' 
  },
  { 
    path: 'datetime', 
    loadChildren: './datetime/datetime.module#DatetimePageModule' 
  },
  { 
    path: 'forms', 
    loadChildren: './forms/forms.module#FormsPageModule' 
  },
  { 
    path: 'notifications', 
    loadChildren: './notifications/notifications.module#NotificationsPageModule' 
  },
  { 
    path: 'about', 
    loadChildren: './about/about.module#AboutPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
