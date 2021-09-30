import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Receta } from './Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  API:string = 'http://localhost/proyectos/angular12-lumen-recetas/api/public/recetas'

  constructor(private clienteHttp: HttpClient) { }

  // AgregarReceta(datosReceta:Receta):Observable<any> {
  //   return this.clienteHttp.post(this.API + '?insertar=1', datosReceta);
  // }

  ObtenerRecetas(){
    console.log('obteniendo recetas...');
    return this.clienteHttp.get(this.API);
  }

}
