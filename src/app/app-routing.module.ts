import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./component/inicio/inicio.component";
import {RegisterComponent} from "./component/register/register.component";
import {ShopComponent} from "./component/shop/shop.component";
import {InicioSesionComponent} from "./component/inicio-sesion/inicio-sesion.component";
import {RecuperarPwdComponent} from "./component/recuperar-pwd/recuperar-pwd.component";
import {RecuperarPwdFinalComponent} from "./component/recuperar-pwd-final/recuperar-pwd-final.component";
import {SendEmailToConfirmComponent} from "./component/send-email-to-confirm/send-email-to-confirm.component";
import {EmailConfirmedComponent} from "./component/email-confirmed/email-confirmed.component";
import {PoliticasDeEnvioComponent} from "./component/politicas-de-envio/politicas-de-envio.component";
import {TransactionConfirmComponent} from "./component/transaction-confirm/transaction-confirm.component";

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'inicio/registro', component: RegisterComponent},
  {path: 'inicio/cart', component: ShopComponent},
  {path: 'inicio/politicasDeEnvio', component: PoliticasDeEnvioComponent},
  {path: 'inicio/iniciarSesion', component: InicioSesionComponent},
  {path: 'inicio/confirmEmail', component: SendEmailToConfirmComponent},
  {path: 'inicio/confirmEmail/verifyToken', component: EmailConfirmedComponent},
  {path: 'inicio/recuperar', component: RecuperarPwdComponent},
  {path: 'inicio/recuperar/changepwd', component: RecuperarPwdFinalComponent},
  {path: 'transactionConfirm', component: TransactionConfirmComponent},
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
