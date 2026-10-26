import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { ComicsSimpleComponents } from './components/comics-simple-components/comics-simple-components';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'coches', component: PadreCocheComponent },
  { path: 'deportes', component: PadreDeportesComponent },
  { path: 'comicsNormal', component: ComicsSimpleComponents },
  { path: 'comicsjson', component: ComicsJsonComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
