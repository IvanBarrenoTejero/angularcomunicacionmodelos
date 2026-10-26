import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { AppRoutingModule } from './app-routing-module';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { DeporteComponent } from './components/deporte-component/deporte-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { ComicsSimpleComponents } from './components/comics-simple-components/comics-simple-components';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCocheComponent,
    HijoCocheComponent,
    PadreDeportesComponent,
    DeporteComponent,
    PadreNumerosComponent,
    HijoNumeroComponent,
    ComicsSimpleComponents,
    ComicsJsonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
