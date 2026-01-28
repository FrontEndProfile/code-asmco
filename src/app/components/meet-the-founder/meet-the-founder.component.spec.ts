import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheFounderComponent } from './meet-the-founder.component';

describe('MeetTheFounderComponent', () => {
  let component: MeetTheFounderComponent;
  let fixture: ComponentFixture<MeetTheFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTheFounderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
