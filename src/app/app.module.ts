import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { LogoComponent } from './logo/logo.component';
import { ListaCarreraComponent } from './lista-carrera/lista-carrera.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    CuerpoComponent,
    LogoComponent,
    ListaCarreraComponent,
    AcercaDeComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
