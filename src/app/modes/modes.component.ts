import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Modes } from './../mock-data/mock-modes';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.scss']
})
export class ModesComponent implements OnInit {

  @Input() selectedMode: string;
  @Output() modeChanged: EventEmitter<string> = new EventEmitter();

  modes = Modes;

  constructor() { }

  ngOnInit() {
  }

  select = function(value) {
    this.selectedMode = value;
    this.modeChanged.emit(value);
  }

}
