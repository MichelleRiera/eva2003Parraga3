import { Component } from '@angular/core';
import { crear } from '../crear/crear';
import { CrearService } from '../crear.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-carrera',
  templateUrl: './lista-carrera.component.html',
  styleUrls: ['./lista-carrera.component.scss']
})
export class ListaCarreraComponent {
  ListadoCarrera: crear[];
 

  constructor(private CrearService : CrearService, 
    private router: Router){
    this.ListadoCarrera = CrearService.getList()
    console.log('listadoContactos', this.ListadoCarrera)

  }


  editar(crear: crear){
    //this.contacto = contacto
    this.CrearService.updateCrear(crear)
    let params: NavigationExtras = {
      queryParams: {
        codigo: crear.codigo

      }
    }   
    this.router.navigate(["crear"], params)

  
  }

  eliminar(crear: crear) {
    this.CrearService.delete(crear.codigo);
    this.ListadoCarrera= this.CrearService.getList();
    
  }
  guardar1() {
    
    this.router.navigate(['listaCarrera']);
  }

}
