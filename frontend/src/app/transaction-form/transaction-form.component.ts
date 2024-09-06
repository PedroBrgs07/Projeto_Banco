import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  amount: number | null = null;
  type: string = 'revenue';
  description: string = '';

  @Output() addTransaction = new EventEmitter<{ amount: number, type: string, description: string }>();

  submit() {
    if (this.amount !== null && this.description) {
      this.addTransaction.emit({
        amount: this.amount,
        type: this.type,
        description: this.description
      });

      // Clear form fields
      this.amount = null;
      this.description = '';
    }
  }
}
