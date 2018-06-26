import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import {AppComponent} from './app.component'

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'collection/:id', component: ProductListComponent },
  {path: 'color/:id', component: ProductListComponent },
  {path: 'width/:id', component: ProductListComponent },
  {path: 'fabric/:id', component: ProductListComponent },
  {path: 'pattern/:id', component: ProductListComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
