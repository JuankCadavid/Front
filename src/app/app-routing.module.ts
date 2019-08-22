import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsformComponent } from './components/productsform/productsform.component';
import { LoginComponent } from './components/login/login.component';
import { SalesComponent } from './components/sales/sales/sales.component';
import { FruvegComponent } from './components/sales/fruveg/fruveg.component';
import { FruitDerivatesComponent } from './components/sales/fruit-derivates/fruit-derivates.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/sales/fruveg',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/add',
    component: ProductsformComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductsformComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sales',
    component: SalesComponent,
    children: [
      {
        path: 'fruveg',
        component: FruvegComponent
      },
      {
        path: 'derivates',
        component: FruitDerivatesComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
