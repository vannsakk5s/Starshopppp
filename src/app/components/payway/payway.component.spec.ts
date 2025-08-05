import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaywayComponent } from './payway.component';

describe('PaywayComponent', () => {
  let component: PaywayComponent;
  let fixture: ComponentFixture<PaywayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaywayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaywayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
