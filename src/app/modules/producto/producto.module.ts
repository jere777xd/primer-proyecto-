import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { AutosComponent } from './pages/autos/autos.component';
import { MotosComponent } from './pages/motos/motos.component';
import { UsadosComponent } from './pages/usados/usados.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    AutosComponent,
    MotosComponent,
    UsadosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
