import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  @Input() transactions: { amount: number, type: string, description: string }[] = [];
  @Output() deleteTransaction = new EventEmitter<number>();

  delete(index: number) {
    this.deleteTransaction.emit(index);
  }
}

