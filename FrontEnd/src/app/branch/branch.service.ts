import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = `${environment.Url}/Branch`;

  constructor(private http: HttpClient) { }

  getBranches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBranchById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getBranchesByBankId(bankId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ByBank/${bankId}`);
  }

  addBranch(branch: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, branch);
  }

  updateBranch(id: number, branch: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, branch);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
