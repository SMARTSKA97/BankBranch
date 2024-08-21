import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private apiUrl = 'http://localhost:3000/banks';

  constructor(private http: HttpClient) {}

  getBanks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBank(bank: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bank);
  }

  updateBank(id: number, bank: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bank);
  }

  deleteBank(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
