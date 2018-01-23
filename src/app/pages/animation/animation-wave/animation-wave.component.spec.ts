import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationWaveComponent } from './animation-wave.component';

describe('AnimationWaveComponent', () => {
  let component: AnimationWaveComponent;
  let fixture: ComponentFixture<AnimationWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
