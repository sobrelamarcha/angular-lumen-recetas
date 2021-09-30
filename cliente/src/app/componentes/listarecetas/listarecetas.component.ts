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

}
