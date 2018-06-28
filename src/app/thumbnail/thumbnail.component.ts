import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() device: Device;

  constructor() { }

  ngOnInit() {
  }

}
