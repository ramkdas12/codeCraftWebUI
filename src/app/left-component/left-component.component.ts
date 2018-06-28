import { Component, OnInit } from '@angular/core';

import { Devices } from '../mock-data/mock-devices';

import { Device } from './../device';

import { DataService } from "./../data.service";

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.scss']
})
export class LeftComponentComponent implements OnInit {

  devices = Devices;

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  mouseWheelDir: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(success => {
      this.devices[this.devices.indexOf(success)] = success;
    }, error => {

    });
    this.select(this.devices[1]);
  }

  updateDevices = function(event) {
    this.devices = event;
  }

  select = function (device) {
    for (let x in this.devices) {
      this.devices[x]['isActive'] = false;
    }
    device.isActive = true;
    this.data.changeDevice(device);
  }

  onScroll(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    }

    else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //Rapid
        && Math.abs(direction[0]) > 30 //Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { //Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        //Do whatever you want with swipe
      }
    }
  }
  
  mouseWheelUpFunc() {
    this.mouseWheelDir = 'upward direction';
  }

  mouseWheelDownFunc() {
    this.mouseWheelDir = 'downward direction';
  }
}
