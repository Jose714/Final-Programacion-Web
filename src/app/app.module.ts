import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { ProductoComponent } from './producto/producto.component';
import { ErrorComponent } from './error/error.component';
import { CrearproductoComponent } from './crearproducto/crearproducto.component';
import { CarritoComponent } from './carrito/carrito.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> 7a719f8569e9ee918d340c291f53fda9fffcba62



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    UsersComponent,
    ProductoComponent,
    ErrorComponent,
    CrearproductoComponent,
<<<<<<< HEAD
    CarritoComponent
=======
    CarritoComponent,
    FooterComponent
>>>>>>> 7a719f8569e9ee918d340c291f53fda9fffcba62
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
