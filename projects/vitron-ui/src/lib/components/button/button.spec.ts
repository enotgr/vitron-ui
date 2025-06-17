import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuiButton } from './button';

describe('Button', () => {
  let component: VuiButton;
  let fixture: ComponentFixture<VuiButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuiButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuiButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
