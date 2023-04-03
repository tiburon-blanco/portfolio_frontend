import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';


@Component({
  selector: 'app-trabajos-realizados',
  templateUrl: './trabajos-realizados.component.html',
  styleUrls: ['./trabajos-realizados.component.scss']
})
export class TrabajosRealizadosComponent implements OnInit  {
  @Input() title: string = 'Trabajos';

  workList: WorkModel[] = [];

  constructor(private workListService : WorkListService) {} 
  
  ngOnInit(): void {
    this.getWorksList();
  }

  getWorksList(): void {
    this.workListService.getWorks().subscribe(workList=> this.workList= workList);
  }
 }

