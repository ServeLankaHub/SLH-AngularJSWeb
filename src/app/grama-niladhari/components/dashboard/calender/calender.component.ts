import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements AfterViewInit {
  
  @ViewChild('calendar') calendar!:ElementRef;

  constructor() { }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      flatpickr(this.calendar.nativeElement, {
        dateFormat: 'Y-m-d',
        inline:true
      });
  }

  }
}
