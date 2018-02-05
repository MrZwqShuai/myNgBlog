import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRightComponent } from './tag-right.component';

describe('TagRightComponent', () => {
  let component: TagRightComponent;
  let fixture: ComponentFixture<TagRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
