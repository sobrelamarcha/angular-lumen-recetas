import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { RecetasService } from 'src/app/servicios/recetas.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editareceta',
  templateUrl: './editareceta.component.html',
  styleUrls: ['./editareceta.component.css']
})

export class EditarecetaComponent implements OnInit {

  formularioDeRecetas:FormGroup;


  elId:any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private recetasService: RecetasService,
    private ruteador:Router
    ) { 

     this.elId = this.activeRoute.snapshot.paramMap.get('id');
     console.log(this.elId);

     this.formularioDeRecetas = formulario.group({
      nombre: [''],
      tiempo_preparacion: "11:11"
    })

     this.recetasService.ObtenerReceta(this.elId).subscribe(respuesta => {
       console.log('Obteniendo la receta para editarla');


       this.formularioDeRecetas.setValue({
        nombre: respuesta.nombre,
        tiempo_preparacion: respuesta.tiempo_preparacion

       });
     })


  }

  ngOnInit(): void {
  }

  editarDatos(): any {
    console.log("me presionaste")
    console.log(this.elId)
    console.log(this.formularioDeRecetas.value)
    this.recetasService.EditarReceta(this.elId, this.formularioDeRecetas.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/');
    });
  }

}
