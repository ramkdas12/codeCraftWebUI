import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { RightComponentComponent } from './right-component/right-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { MouseWheelDirective } from './mouse-wheel.directive';
import { ToggleComponent } from './toggle/toggle.component';

import { DataService } from './data.service';
import { ShadesComponent } from './shades/shades.component';
import { ModesComponent } from './modes/modes.component';
import { CurvedSliderComponent } from './curved-slider/curved-slider.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LeftComponentComponent,
    RightComponentComponent,
    HeaderComponentComponent,
    ThumbnailComponent,
    MouseWheelDirective,
    ToggleComponent,
    ShadesComponent,
    ModesComponent,
    CurvedSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
