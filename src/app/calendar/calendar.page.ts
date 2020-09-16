import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  myDate = new Date();
  now = new Date();
  myDates = [new Date(), new Date(this.now.setDate(5))];

  

  ngOnInit(){
    
  }

}
