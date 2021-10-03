import { Component, OnInit } from '@angular/core';

import { RecetasService } from '../../servicios/recetas.service';

@Component({
  selector: 'app-listarecetas',
  templateUrl: './listarecetas.component.html',
  styleUrls: ['./listarecetas.component.css']
})
export class ListarecetasComponent implements OnInit {

  Recetas:any;

  constructor(private recetasService:RecetasService) { }

  ngOnInit(): void {
    this.recetasService.ObtenerRecetas().subscribe(respuesta => {
      console.log(respuesta);
      this.Recetas = respuesta;
    })
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id + " - " + iControl)
    this.recetasService.BorrarReceta(id).subscribe( respuesta => {
      this.Recetas.splice(iControl,1)
    })
  }

}
