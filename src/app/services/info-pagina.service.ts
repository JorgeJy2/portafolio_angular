import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(public http: HttpClient) {
    //Leer el archivo JSON
    this.http.get('assets/data/data_pagina.json')
    .subscribe( (response: InfoPagina) => {
      console.log('servicio listo...');
      this.cargada = true;
      this.info = response;
    });
   }
 
}
