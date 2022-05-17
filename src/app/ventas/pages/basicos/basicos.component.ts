import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'valentin';
  nombreUpper: string = 'VALENTIN';
  nombreCompleto: string = 'vALentIn'

  fecha: Date = new Date(); 

}
