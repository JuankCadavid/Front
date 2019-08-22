import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsformComponent } from './components/productsform/productsform.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FruvegComponent } from './components/sales/fruveg/fruveg.component';
import { FruitDerivatesComponent } from './components/sales/fruit-derivates/fruit-derivates.component';
import { SalesComponent } from './components/sales/sales/sales.component';
import { NavegationComponent } from './components/sales/navegation/navegation.component';
import { ProductFilterPipe } from './components/sales/productFilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsformComponent,
    NavigateComponent,
    LoginComponent,
    FooterComponent,
    FruvegComponent,
    FruitDerivatesComponent,
    SalesComponent,
    NavegationComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
