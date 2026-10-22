import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { AppRoutingModule } from './app-routing-module';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { DeportesComponent } from './components/deportes-component/deportes-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { DeporteComponent } from './components/deporte-component/deporte-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCocheComponent,
    HijoCocheComponent,
    DeportesComponent,
    PadreDeportesComponent,
    DeporteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
