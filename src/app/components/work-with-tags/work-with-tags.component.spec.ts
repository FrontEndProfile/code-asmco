import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithTagsComponent } from './work-with-tags.component';

describe('WorkWithTagsComponent', () => {
  let component: WorkWithTagsComponent;
  let fixture: ComponentFixture<WorkWithTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkWithTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
