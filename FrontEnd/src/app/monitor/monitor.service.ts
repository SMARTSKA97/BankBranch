import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private apiUrl = 'http://localhost:3000'; // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  addBranch(branch: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/branches`, branch);
  }

  updateBranch(id:number,branch: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/branches/${id}`, branch);
  }

  deleteBranch(branchId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/branches/${branchId}`);
  }
}
