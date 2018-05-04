import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwiperComponent } from './ng-swiper.component';

describe('NgSwiperComponent', () => {
  let component: NgSwiperComponent;
  let fixture: ComponentFixture<NgSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
