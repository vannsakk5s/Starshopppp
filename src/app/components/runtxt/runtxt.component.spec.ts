import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntxtComponent } from './runtxt.component';

describe('RuntxtComponent', () => {
  let component: RuntxtComponent;
  let fixture: ComponentFixture<RuntxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuntxtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuntxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
