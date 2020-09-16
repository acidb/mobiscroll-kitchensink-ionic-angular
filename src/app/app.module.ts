import { MbscModule, MbscOptionsService, MbscFormsModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [  
    MbscModule, 
    BrowserModule,
    FormsModule,
    MbscFormsModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: MbscOptionsService, useClass: MbscOptionsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
