import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://localhost:3000/stages';

  constructor(private http: HttpClient) {}

  getAllStages(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getStageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addStage(stage: any): Observable<any> {
    return this.http.post(this.baseUrl, stage);
  }

  deleteStage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}