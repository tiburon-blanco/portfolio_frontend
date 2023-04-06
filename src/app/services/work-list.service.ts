import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORKS } from 'src/assets/files/mock-works';
import { WorkModel } from '../models/work.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WorkListService {

  works: WorkModel[] = WORKS;
  private worksUrl = 'api/works'

  constructor(private http: HttpClient) { }

  getWorks(): Observable<WorkModel[]>{
    return this.http.get<WorkModel[]>(this.worksUrl);
  }
}
