import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre = new EventEmitter<string>();
  mostrarFavorito(): void {
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
