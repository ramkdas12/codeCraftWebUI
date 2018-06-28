import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Shades } from './../mock-data/moch-shades';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss']
})
export class ShadesComponent implements OnInit {

  @Input() selectedShade: string;
  @Output() shadeChanged: EventEmitter<string> = new EventEmitter();

  shades = Shades;

  constructor() { }

  ngOnInit() {
  }

  select = function(value) {
    this.selectedShade = value;
    this.shadeChanged.emit(value);
  }

}
