import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  buildDate: Date = new Date(2020, 7, 18, 12, 0);

}
