import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products', component: ProductsComponent},
{path: 'products/:id', component: DetailsProductComponent},
{path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
