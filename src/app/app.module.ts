import { NgModule } from '@angular/core';
//modulos
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
//componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { InfoComponent } from './component/info/info.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopComponent } from './component/shop/shop.component';
import { RecuperarPwdComponent } from './component/recuperar-pwd/recuperar-pwd.component';
import { RecuperarPwdFinalComponent } from './component/recuperar-pwd-final/recuperar-pwd-final.component';
import { SendEmailToConfirmComponent } from './component/send-email-to-confirm/send-email-to-confirm.component';
import { EmailConfirmedComponent } from './component/email-confirmed/email-confirmed.component';
import { PoliticasDeEnvioComponent } from "./component/politicas-de-envio/politicas-de-envio.component";

//Inicio de Sesión
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { TransactionConfirmComponent } from './component/transaction-confirm/transaction-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InfoComponent,
    InicioComponent,
    InicioSesionComponent,
    NavbarComponent,
    RegisterComponent,
    ShopComponent,
    RecuperarPwdComponent,
    RecuperarPwdFinalComponent,
    EmailConfirmedComponent,
    SendEmailToConfirmComponent,
    PoliticasDeEnvioComponent,
    TransactionConfirmComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '550654878261-qdc9el1o0e96uc9ul9bo7dv8ahr96f83.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('130908215727353')
        },

      ]
    } as SocialAuthServiceConfig,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
