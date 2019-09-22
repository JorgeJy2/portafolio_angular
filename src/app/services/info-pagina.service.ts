import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(public http: HttpClient) {
    //Leer el archivo JSON
   this.cargarInfo();
   this.cargarEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data_pagina.json')
    .subscribe( (response: InfoPagina) => {
      this.cargada = true;
      this.info = response;
    });
   }

   public cargarEquipo() {
     this.http.get('https://angular-articulos.firebaseio.com/equipo.json')
     .subscribe( (response: any[]) => {
      this.equipo = response;
      console.log(this.equipo);
     });
   }
}
