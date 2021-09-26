import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarecetasComponent } from './componentes/listarecetas/listarecetas.component';
import { NuevarecetaComponent } from './componentes/nuevareceta/nuevareceta.component';


const routes: Routes = [
  { path: '', component: ListarecetasComponent },
  { path: 'nuevareceta', component: NuevarecetaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
