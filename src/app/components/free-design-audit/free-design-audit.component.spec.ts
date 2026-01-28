import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDesignAuditComponent } from './free-design-audit.component';

describe('FreeDesignAuditComponent', () => {
  let component: FreeDesignAuditComponent;
  let fixture: ComponentFixture<FreeDesignAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeDesignAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDesignAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
