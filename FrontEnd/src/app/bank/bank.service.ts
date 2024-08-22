import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = `${environment.Url}/Bank`; // Change this URL if using a different backend

  constructor(private http: HttpClient) { }

  getBanks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBankById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBank(bank: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bank);
  }

  updateBank(id: number, bank: any): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, bank);
  }

  deleteBank(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
