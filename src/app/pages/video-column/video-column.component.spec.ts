import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoColumnComponent } from './video-column.component';

describe('VideoColumnComponent', () => {
  let component: VideoColumnComponent;
  let fixture: ComponentFixture<VideoColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
