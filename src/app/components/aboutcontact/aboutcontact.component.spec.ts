import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcontactComponent } from './aboutcontact.component';

describe('AboutcontactComponent', () => {
  let component: AboutcontactComponent;
  let fixture: ComponentFixture<AboutcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
