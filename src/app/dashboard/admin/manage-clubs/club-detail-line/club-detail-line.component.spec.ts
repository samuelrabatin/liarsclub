import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetailLineComponent } from './club-detail-line.component';

describe('ClubDetailLineComponent', () => {
  let component: ClubDetailLineComponent;
  let fixture: ComponentFixture<ClubDetailLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDetailLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDetailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
