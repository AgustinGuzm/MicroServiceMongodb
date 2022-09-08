import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MntoCustomersComponent } from './mnto-customers.component';

describe('MntoCustomersComponent', () => {
  let component: MntoCustomersComponent;
  let fixture: ComponentFixture<MntoCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MntoCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MntoCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
