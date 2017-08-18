import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VIewTopicComponent } from './view-topic.component';

describe('VIewTopicComponent', () => {
  let component: VIewTopicComponent;
  let fixture: ComponentFixture<VIewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VIewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VIewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
