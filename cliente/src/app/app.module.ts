import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarecetasComponent } from './componentes/listarecetas/listarecetas.component';
import { NuevarecetaComponent } from './componentes/nuevareceta/nuevareceta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarecetasComponent,
    NuevarecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
