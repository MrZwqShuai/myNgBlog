import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvideoComponent } from './myvideo.component';

describe('MyvideoComponent', () => {
  let component: MyvideoComponent;
  let fixture: ComponentFixture<MyvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
