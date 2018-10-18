import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  API_BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addJob(job) {
    return this.http.post(`${this.API_BASE_URL}/jobs`, job);
  }

  findJob() {

  }
}
