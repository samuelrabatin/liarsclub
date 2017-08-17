import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageForumsComponent } from './manage-forums.component';

describe('ManageForumsComponent', () => {
  let component: ManageForumsComponent;
  let fixture: ComponentFixture<ManageForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
