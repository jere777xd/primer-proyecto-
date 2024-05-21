import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { MotosComponent } from './pages/motos/motos.component';
import { UsadosComponent } from './pages/usados/usados.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  //rutas de las vistas
  {
    path: "producto",component:ProductoComponent
  },
  {
    path:"autos",component:AutosComponent
  },
  {
    path:"motos",component:MotosComponent
  },
  {
    path:"usados",component:UsadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
