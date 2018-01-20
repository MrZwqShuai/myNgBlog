import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRightComponent } from './column-right.component';

describe('ColumnRightComponent', () => {
  let component: ColumnRightComponent;
  let fixture: ComponentFixture<ColumnRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
