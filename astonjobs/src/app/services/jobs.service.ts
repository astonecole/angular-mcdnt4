import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  API_BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addJob(job) {
    return this.http.post(`${this.API_BASE_URL}/jobs`, job);
  }

  findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_BASE_URL}/jobs`)
      .pipe(
        map(res => res)
      );
  }

  findById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.API_BASE_URL}/jobs/${id}`)
      .pipe(
        map(res => res)
      );
  }
}
