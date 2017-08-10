import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSetupsComponent } from './manage-setups.component';

describe('ManageSetupsComponent', () => {
  let component: ManageSetupsComponent;
  let fixture: ComponentFixture<ManageSetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSetupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
