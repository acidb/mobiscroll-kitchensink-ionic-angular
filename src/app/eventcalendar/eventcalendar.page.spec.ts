import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcalendarPage } from './eventcalendar.page';

describe('EventcalendarPage', () => {
  let component: EventcalendarPage;
  let fixture: ComponentFixture<EventcalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
