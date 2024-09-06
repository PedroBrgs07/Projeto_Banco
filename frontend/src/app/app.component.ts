import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTransactionListComponent } from './app-transaction-list/app-transaction-list.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  @NgModule({
    declarations: [
      AppTransactionListComponent,
  
    ]
  })
})
export class AppComponent {
  title = 'frontend';
}
