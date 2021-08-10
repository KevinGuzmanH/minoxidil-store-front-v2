import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./component/inicio/inicio.component";
import {RegisterComponent} from "./component/register/register.component";
import {ShopComponent} from "./component/shop/shop.component";
import {InicioSesionComponent} from "./component/inicio-sesion/inicio-sesion.component";
import {RecuperarPwdComponent} from "./component/recuperar-pwd/recuperar-pwd.component";
import {RecuperarPwdFinalComponent} from "./component/recuperar-pwd-final/recuperar-pwd-final.component";

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'inicio/registro', component: RegisterComponent},
  {path: 'inicio/cart', component: ShopComponent},
  {path: 'inicio/iniciarSesion', component: InicioSesionComponent},
  {path: 'inicio/recuperar', component: RecuperarPwdComponent},
  {path: 'inicio/recuperar/changepwd', component: RecuperarPwdFinalComponent},
  {path: '', redirectTo: 'inicio',pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
