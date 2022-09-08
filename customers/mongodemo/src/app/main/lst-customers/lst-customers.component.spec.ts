import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstCustomersComponent } from './lst-customers.component';

describe('LstCustomersComponent', () => {
  let component: LstCustomersComponent;
  let fixture: ComponentFixture<LstCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
