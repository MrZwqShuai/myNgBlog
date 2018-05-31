import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrageScreenComponent } from './barrage-screen.component';

describe('BarrageScreenComponent', () => {
  let component: BarrageScreenComponent;
  let fixture: ComponentFixture<BarrageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
