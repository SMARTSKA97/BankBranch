import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchShowComponent } from './branch-show.component';

describe('BranchShowComponent', () => {
  let component: BranchShowComponent;
  let fixture: ComponentFixture<BranchShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
