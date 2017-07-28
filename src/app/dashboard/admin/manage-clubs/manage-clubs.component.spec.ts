import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClubsComponent } from './manage-clubs.component';

describe('ManageClubsComponent', () => {
  let component: ManageClubsComponent;
  let fixture: ComponentFixture<ManageClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
