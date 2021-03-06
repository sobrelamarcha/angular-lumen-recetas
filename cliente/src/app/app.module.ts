import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarecetasComponent } from './componentes/listarecetas/listarecetas.component';
import { NuevarecetaComponent } from './componentes/nuevareceta/nuevareceta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarecetaComponent } from './componentes/editareceta/editareceta.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarecetasComponent,
    NuevarecetaComponent,
    EditarecetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
