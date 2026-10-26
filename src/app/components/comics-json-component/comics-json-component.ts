import { Component } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  public arrayComics: Array<Comic>;
  public errorMessage = '';

  constructor() {
    this.arrayComics = [];
  }

  async cargarComics(): Promise<void> {
    this.errorMessage = '';

    try {
      const response = await fetch('/assets/comics.json');
      if (!response.ok) {
        throw new Error(`No se pudo cargar el JSON (${response.status})`);
      }

      const data: Array<{
        nombre: string;
        imagen: string;
        descripcion: string;
      }> = await response.json();

      this.arrayComics = data.map(
        (element) =>
          new Comic(element.nombre, element.imagen, element.descripcion),
      );
    } catch (error) {
      console.error('Error cargando los cómics:', error);
      this.errorMessage = 'No se han podido cargar los cómics.';
      this.arrayComics = [];
    }
  }
}
