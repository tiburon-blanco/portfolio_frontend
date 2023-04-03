import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORKS } from 'src/assets/files/mock-works';
import { WorkModel } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})

export class WorkListService {

  works: WorkModel[] = WORKS;

  constructor() { }

  getWorks(): Observable<WorkModel[]>{
    const works = of(WORKS)
    return works;
  }
}
