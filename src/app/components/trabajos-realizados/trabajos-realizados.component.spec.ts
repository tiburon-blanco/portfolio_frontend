import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosRealizadosComponent } from './trabajos-realizados.component';

describe('TrabajosRealizadosComponent', () => {
  let component: TrabajosRealizadosComponent;
  let fixture: ComponentFixture<TrabajosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosRealizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
