import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupsComponent } from './setups.component';

describe('SetupsComponent', () => {
  let component: SetupsComponent;
  let fixture: ComponentFixture<SetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
