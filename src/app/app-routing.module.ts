import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsformComponent } from './components/productsform/productsform.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
    path:'login',
    component:LoginComponent
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
