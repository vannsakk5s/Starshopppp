import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutslidComponent } from './aboutslid.component';

describe('AboutslidComponent', () => {
  let component: AboutslidComponent;
  let fixture: ComponentFixture<AboutslidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutslidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutslidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
