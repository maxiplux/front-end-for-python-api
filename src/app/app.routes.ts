import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/AuthGuard';
import {ErrorComponent} from "./components/errors-component/error.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductCreateComponent} from "./components/product-create/product-create.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard/products', pathMatch: 'full' },
  {
    path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: ProductCreateComponent },
      { path: 'products/:id/edit', component: ProductEditComponent }
    ]
  },
  { path: 'login',  component: LoginComponent},
  {path: '404',  component: ErrorComponent},
  {path: '**', redirectTo: '/404'}



];


