import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'productos',
    component: ProductoComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users', component: UsersComponent
  }
  ,
  {
    path: 'error', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
