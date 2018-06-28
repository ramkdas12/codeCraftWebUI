import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedSliderComponent } from './curved-slider.component';

describe('CurvedSliderComponent', () => {
  let component: CurvedSliderComponent;
  let fixture: ComponentFixture<CurvedSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvedSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
