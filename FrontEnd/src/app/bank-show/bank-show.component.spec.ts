import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankShowComponent } from './bank-show.component';

describe('BankShowComponent', () => {
  let component: BankShowComponent;
  let fixture: ComponentFixture<BankShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
