import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curved-slider',
  templateUrl: './curved-slider.component.html',
  styleUrls: ['./curved-slider.component.scss']
})
export class CurvedSliderComponent implements OnInit {

  @Input() selectRange;
  @Output() rangeChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
