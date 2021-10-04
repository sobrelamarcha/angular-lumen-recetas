import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarecetasComponent } from './componentes/listarecetas/listarecetas.component';
import { NuevarecetaComponent } from './componentes/nuevareceta/nuevareceta.component';
import { EditarecetaComponent } from './componentes/editareceta/editareceta.component';


const routes: Routes = [
  { path: '', component: ListarecetasComponent },
  { path: 'nuevareceta', component: NuevarecetaComponent },
  { path: 'editareceta/:id', component: EditarecetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
