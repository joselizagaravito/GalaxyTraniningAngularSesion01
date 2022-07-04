import { Component } from '@angular/core';

@Component({
  selector: 'abc-app',
  template: `
    <h2>Curso de Angular 14: {{Mensaje}}</h2>
    <img src="/assets/images/angular-basic.png"/>
  `
})
export class AbcAppComponent {
  Mensaje = 'Sesion 01';
}
