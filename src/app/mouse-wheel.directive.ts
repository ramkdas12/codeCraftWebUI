import { Directive, Input, Output, HostListener, EventEmitter, AfterViewChecked } from '@angular/core';

import { Device } from './device';

@Directive({ selector: '[mouseWheel]' })
export class MouseWheelDirective implements AfterViewChecked {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();
  @Input() devices: Device[];
  @Output() devicesChanged: EventEmitter<Device[]> = new EventEmitter();

  ngAfterViewChecked() {
    this.checkToScroll();
  }

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }
  translateValue = 0;
  toScroll = true;

  checkToScroll = function () {
    var deviceHeight = document.getElementsByClassName('container')[0].clientHeight;
    var devicesHeight = deviceHeight * document.getElementsByClassName('container').length;
    var viewHeight = document.getElementsByTagName('body')[0].clientHeight;
    var devicesHeightInVH = Math.ceil(devicesHeight / viewHeight * 100);
    if (devicesHeightInVH < 65) {
      var scrollHeight = document.getElementsByClassName('container')[0].clientHeight;
      let cssString = 'transform: translateY(' + scrollHeight + 'px)';
      var devices = document.getElementsByClassName('container');
      for (let i = 0; i < devices.length; i++) {
        devices[i].setAttribute('style', cssString);
      }
      this.toScroll = false;
      return false;;
    } else {
      this.toScroll = true;
      return true;
    }
  }

  shiftArrayToRight = function (arr, places) {
    for (var i = 0; i < places; i++) {
      arr.unshift(arr.pop());
    }
  }

  mouseWheelFunc(event: any) {
    if (!this.checkToScroll()) {
      return;
    }
    var event = window.event || event; // old IE support
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if (delta > 0) {
      this.mouseWheelUp.emit(event);
    } else if (delta < 0) {
      this.mouseWheelDown.emit(event);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }

    if (parseInt(event['deltaY']) < 0) {
      this.shiftArrayToRight(this.devices, 1);
    } else {
      this.devices = this.devices.concat(this.devices.splice(0,1));
    }
    this.devicesChanged.emit(this.devices);
  }
}