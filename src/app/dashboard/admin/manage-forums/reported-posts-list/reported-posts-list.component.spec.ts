import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedPostsListComponent } from './reported-posts-list.component';

describe('ReportedPostsListComponent', () => {
  let component: ReportedPostsListComponent;
  let fixture: ComponentFixture<ReportedPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
