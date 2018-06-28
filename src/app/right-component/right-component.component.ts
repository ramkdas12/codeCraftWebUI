import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';
import { Device } from '../device';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.scss']
})
export class RightComponentComponent implements OnInit {

  device: Device;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(success => {
      this.device = success;
      console.log(this.device);
    }, error => {

    });
  }

  updateSelect = function(event) {
    this.device.isSelected = event;
  }

  updateShade = function(event) {
    this.device.properties.shade = event;
  }

  updateMode = function(event) {
    this.device.properties.mode = event;
  }

}
