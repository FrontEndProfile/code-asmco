import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBringComponent } from './what-we-bring.component';

describe('WhatWeBringComponent', () => {
  let component: WhatWeBringComponent;
  let fixture: ComponentFixture<WhatWeBringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeBringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
