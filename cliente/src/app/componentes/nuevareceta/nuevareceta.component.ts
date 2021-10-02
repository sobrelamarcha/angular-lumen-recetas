import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-nuevareceta',
  templateUrl: './nuevareceta.component.html',
  styleUrls: ['./nuevareceta.component.css']
})
export class NuevarecetaComponent implements OnInit {

  formularioDeRecetas:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private recetasService:RecetasService
    ) { 

    this.formularioDeRecetas = formulario.group({
      nombre: ['']
    })

  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log("me presionaste")
    console.log(this.formularioDeRecetas.value)
    this.recetasService.AgregarReceta(this.formularioDeRecetas.value).subscribe();
  }

}
