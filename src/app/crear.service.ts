import { Injectable } from '@angular/core';
import { crear } from './crear/crear';
import { CrearComponent } from './crear/crear.component';
@Injectable({
  providedIn: 'root'
})
export class CrearService {
  crear: crear[] = [];
    comp: any;
  
    setComponet(comp: CrearComponent){
      this.comp = comp
    }
  
    updateCrear(crear: CrearComponent){
      this.comp.crear = crear
    }
  
    save(crear: crear){
  
      this.crear.push({ ...crear });
      //this.contacto = new Contacto()
      console.log(this.crear);
      
    }
  
    getList(){
      return this.crear;
    }
  
    delete(codigo: string){
      const index =this.crear.findIndex(crear => crear.codigo=== codigo);
      if(index !==-1){
        this.crear.splice(index, 1);
      }
    }
  
    update(codigo: string, carreraActualizado: crear){
      const index =this.crear.findIndex(crear => crear.codigo=== codigo);
      if(index !==-1){
        this.crear[index]= carreraActualizado;
        return true;
      }
        return false;
    }
  
    getCrear(codigo: string): crear | undefined{
      return this.crear.find(crear =>  crear.codigo=== codigo);
    }

  constructor() { 
    
  }
}
