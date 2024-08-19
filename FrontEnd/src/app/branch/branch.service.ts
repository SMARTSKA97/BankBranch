import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private baseUrl = 'http://localhost:3000/branches';

  constructor(private http: HttpClient) { }

  getBranches(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addBranch(branch: any): Observable<any> {
    return this.http.post(this.baseUrl, branch);
  }

  updateBranch(branch: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${branch.id}`, branch);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
