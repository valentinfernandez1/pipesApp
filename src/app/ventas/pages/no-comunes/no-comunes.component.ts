import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre: string = "Susana";
  genero: string = "femenino";

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Vale', 'Agus', 'Gianni'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero == 'femenino'){
      this.nombre = 'Valentin';
      this.genero = 'Masculino';
      return;
    }
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Vale',
    edad: 22,
    direccion: 'Lujan de Cuyo, Mendoza'
  }

  //JsonPipe
  heroes = [
    {
      nombre:'Deadpool',
      vuela: false
    },
    {
      nombre:'Deadpool',
      vuela: false
    }
  ]
}
