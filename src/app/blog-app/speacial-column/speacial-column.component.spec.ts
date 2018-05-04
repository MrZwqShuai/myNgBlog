import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeacialColumnComponent } from './speacial-column.component';

describe('SpeacialColumnComponent', () => {
  let component: SpeacialColumnComponent;
  let fixture: ComponentFixture<SpeacialColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeacialColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeacialColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
