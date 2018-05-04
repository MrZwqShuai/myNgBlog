import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLeftComponent } from './tag-left.component';

describe('TagLeftComponent', () => {
  let component: TagLeftComponent;
  let fixture: ComponentFixture<TagLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
