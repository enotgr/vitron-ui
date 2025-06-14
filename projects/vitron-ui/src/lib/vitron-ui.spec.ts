import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitronUi } from './vitron-ui';

describe('VitronUi', () => {
  let component: VitronUi;
  let fixture: ComponentFixture<VitronUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitronUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitronUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
