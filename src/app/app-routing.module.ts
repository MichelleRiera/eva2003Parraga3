import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCarreraComponent } from './lista-carrera/lista-carrera.component';
import { CrearComponent } from './crear/crear.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  {path: "listaCarrera", component: ListaCarreraComponent},
  {path:"crear", component: CrearComponent},
  {path:"acerca", component: AcercaDeComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
