import { Component, OnInit } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() model: Boolean;
  @Output() modelChanged: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.model = this.model ? this.model : false;
  }

  change = function() {
    this.modelChanged.emit(!this.model);
  }

}
