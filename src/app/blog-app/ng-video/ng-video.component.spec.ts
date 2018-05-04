import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVideoComponent } from './ng-video.component';

describe('NgVideoComponent', () => {
  let component: NgVideoComponent;
  let fixture: ComponentFixture<NgVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
