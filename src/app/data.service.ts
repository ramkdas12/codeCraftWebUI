import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Device } from './device';

@Injectable()
export class DataService {

  device = new Device();

  private messageSource = new BehaviorSubject(this.device);

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeDevice(newDevice: Device) {
    this.messageSource.next(newDevice);
  }

}
