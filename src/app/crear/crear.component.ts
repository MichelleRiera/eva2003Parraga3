import { Component } from '@angular/core';
import { crear } from './crear';
import { CrearService } from '../crear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  crear: any = new crear();

  constructor(private CrearService: CrearService,
    private router: Router) {
      console.log('hola')
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.crear = new crear()
        this.crear = params['codigo']
      }
      this.CrearService.setComponet(this)
    }


  guardar() {
    if (this.CrearService.update(this.crear.codigo, this.crear)){
      console.log('actualizado')
      this.crear = new crear()
    }else{
      this.CrearService.save(this.crear)
      this.crear = new crear()
      
    }
  
    
  }

}
