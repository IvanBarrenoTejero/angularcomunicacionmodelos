import { Component } from '@angular/core';
import { Comic } from '../../models/Comic';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<Comic>;
  public errorMessage = '';

  constructor() {
    this.arrayComics = [];
  }

  async cargarComics(): Promise<void> {
    this.errorMessage = '';

    try {
      const response = await fetch('/assets/comics.xlsx');
      if (!response.ok) {
        throw new Error(`No se pudo cargar el XLSX (${response.status})`);
      }

      const buffer = await response.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];

      if (!firstSheetName) {
        throw new Error('El archivo XLSX no contiene hojas');
      }

      const sheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json<{
        nombre?: string;
        titulo?: string;
        imagen?: string;
        descripcion?: string;
      }>(sheet, { defval: '' });

      this.arrayComics = rows
        .map(
          (row) =>
            new Comic(
              row.nombre || row.titulo || '',
              row.imagen || '',
              row.descripcion || '',
            ),
        )
        .filter((comic) => comic.titulo !== '');
    } catch (error) {
      console.error('Error cargando los cómics desde XLSX:', error);
      this.errorMessage = 'No se han podido cargar los cómics del Excel.';
      this.arrayComics = [];
    }
  }
}
