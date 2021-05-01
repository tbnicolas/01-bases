import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() dataInputNuevo: Personaje = {nombre:'', poder:0};
/*   @Input() dataInputpersonajes: Personaje []= []; */
  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  constructor(private dbzService: DbzService) {}

  agregar():void {
    if ( this.dataInputNuevo.nombre.trim().length === 0) {
      return;
    }
    /* this.dataInputpersonajes.push(this.dataInputNuevo); */
    console.log(this.dataInputNuevo);

/*     this.onNuevoPersonaje.emit(this.dataInputNuevo);
 */
    this.dbzService.agregarPersonaje(this.dataInputNuevo);

    this.dataInputNuevo = {
      nombre: '',
      poder: 0
    }

  }

}
