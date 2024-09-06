import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8000/api/transacoes'; 

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTransaction(transaction: { amount: number; type: string; description: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, transaction, this.httpOptions);
  }

  getTransaction(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateTransaction(id: number, transaction: { amount?: number; type?: string; description?: string }): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, transaction, this.httpOptions);
  }

  deleteTransaction(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
