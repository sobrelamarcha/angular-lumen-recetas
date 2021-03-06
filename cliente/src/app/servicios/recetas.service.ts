import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  API:string = 'http://localhost/proyectos/angular-lumen-recetas/api/public/recetas'

  constructor(private clienteHttp: HttpClient) { }

  AgregarReceta(datosReceta:Receta):Observable<any> {
    return this.clienteHttp.post(this.API, datosReceta);
  }

  ObtenerRecetas():Observable<any>{
    console.log('obteniendo recetas...');
    return this.clienteHttp.get(this.API);
  }

  ObtenerReceta(id:any):Observable<any>{
    console.log('obteniendo receta ' + id + ' ...');
    return this.clienteHttp.get(this.API + "/" + id);
  }

  BorrarReceta(id:any):Observable<any> {
    return this.clienteHttp.delete(this.API + "/" + id);
  }

  EditarReceta(id:any,datosReceta:Receta):Observable<any> {
    return this.clienteHttp.put(this.API + "/" + id, datosReceta);
  }

}
