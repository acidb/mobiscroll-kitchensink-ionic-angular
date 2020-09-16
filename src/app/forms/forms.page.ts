import { Component, OnInit } from '@angular/core';
import { Notifications, MbscOptionsService } from '@mobiscroll/angular';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  providers: [Notifications]
})
export class FormsPage implements OnInit{
  
  switch1 = false;
  switch2 = true;
  switch3 = false;
  switch4 = true;
  myRadio = 'option1';

  myValue = '';
  myChoice = '';

  myGroupItems: Array<{ checked: boolean, text: string, value: string }> = [
    { checked: false, text: 'S', value: 'sunday' }, 
    { checked: true, text: 'M', value: 'monday' }, 
    { checked: false, text: 'T', value: 'tuesday' },
    { checked: false, text: 'W', value: 'wednesday' },
    { checked: true, text: 'T', value: 'thursday' },
    { checked: false, text: 'F', value: 'friday' },
    { checked: false, text: 'S',value: 'saturday' }
  ]



  constructor() { }
  
  ngOnInit() { }
  
}
