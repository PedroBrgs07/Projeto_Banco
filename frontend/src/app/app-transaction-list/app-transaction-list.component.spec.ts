import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTransactionListComponent } from './app-transaction-list.component';

describe('AppTransactionListComponent', () => {
  let component: AppTransactionListComponent;
  let fixture: ComponentFixture<AppTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTransactionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
