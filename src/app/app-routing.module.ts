import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';



const routes: Routes = [
    {
        path: 'navigation', component: NavigationComponent
    },
    {
        path: 'productos',
        component: ProductoComponent
    }
    ,


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
