import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() { 
    const works = [
      {
          "id": 1,
          "title": "Primer Trabajo",
          "urlImage": "data:image/jpeg;base64,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",
          "description": "fizcalizacion presencial, etx"
      },
  
      {
          "id": 2,
          "title": "segundo Trabajo",
          "urlImage": "https://www.inmobusqueda.com/administracion/web/logo/1582/o.logo.jpg",
          "description": "inmobiliaria, etx"
      },
  
      {
          "id": 3,
          "title": "Tercer Trabajo",
          "urlImage": "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/292241321_132404876146081_4669233547178520931_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kZhA4nfmDEEAX_txuOc&_nc_ht=scontent-eze1-1.xx&oh=00_AfAvb9IA8nVVcssy-_xaL4z4knHKOZXleVY2iivkpsrf4Q&oe=642B7055",
          "description": "Productor asesor de seguros"
      },
  
      {
          "id": 4,
          "title": "cuarto Trabajo",
          "urlImage": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ALEGO_logo.svg&psig=AOvVaw3A6WeyBHRb7oyFhG3FufiB&ust=1680279865585000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCrwLWIhP4CFQAAAAAdAAAAABAE",
          "description": "lego"
      },

      {
        "id": 3,
        "title": "Quinto Trabajo",
        "urlImage": "https://www.inmobusqueda.com/administracion/web/logo/1582/o.logo.jpg",
        "description": "inmobiliaria, etx"
    },
  
  ];
    return {works}

  }
}
