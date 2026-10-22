import { Component } from '@angular/core';
import Coche from '../../models/Coche';

@Component({
  selector: 'app-padre-coche-component',
  standalone: false,
  styleUrl: './padre-coche-component.css',
  templateUrl: './padre-coche-component.html',
})
export class PadreCocheComponent {
  public arrayCoches: Array<Coche>
  constructor
() {
    this.arrayCoches = [
      new Coche("Pontiac", "Firebird", 0, 25),
      new Coche("Chevrolet", "Camaro", 0, 30),
      new Coche("Ford", "Mustang", 0, 35)
    ]
  }
}
