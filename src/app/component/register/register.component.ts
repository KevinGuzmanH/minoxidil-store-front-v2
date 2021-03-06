import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import { NuevoUsuario} from "../../model/nuevoUsuario";
import { Router } from "@angular/router";
import { AlertasService } from "../../service/alertas/alertas.service";
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser = new NuevoUsuario('','','','PAGE','','');
  valido: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private authService: AutenticacionService
    ,private router: Router
    ,private alerta: AlertasService
    ,private authServiceSocial: SocialAuthService
  ) { }

  ngOnInit(): void {

  }

  registrar(valido: boolean, nombre: string, apellido: string, correo: string,provider: string,phone: string, contrase: string) {
    this.newUser.firstname = nombre;
    this.newUser.lastname = apellido;
    this.newUser.email = correo;
    this.newUser.provider = provider;
    this.newUser.phone = phone;
    this.newUser.password = contrase;
    console.log(this.newUser);
    if (isPlatformBrowser(this.platformId)) {
      if (valido) {
        this.authService.newUser(this.newUser).subscribe(
          data => {
            this.alerta.succes(data.toString(), '');
          }, error => {
            this.alerta.error(error.error, 'Error');
          }
        );
      } else {
        this.alerta.error('Campos Invalidos', 'Error')
      }
    }
  }

  registrarWithExternal(phone: string) {
    this.newUser.phone = phone;
    if (isPlatformBrowser(this.platformId)) {
      this.authService.newUser(this.newUser).subscribe(
          data => {
            this.alerta.succes(data.toString(), '');
          }, error => {
            this.alerta.error(error.error, 'Error');
          }
        );
     }
  }

  registerInWithGoogle(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe(
        (user) => {
          this.newUser.firstname = user.firstName;
          this.newUser.lastname = user.lastName;
          this.newUser.email = user.email;
          this.newUser.provider = user.provider;
          this.newUser.password = user.id;
          this.valido = true;
        }
      )
    }
  }

  registerInWithFB(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe(
        (user) => {
          this.newUser.firstname = user.firstName;
          this.newUser.lastname = user.lastName;
          this.newUser.email = user.email;
          this.newUser.provider = user.provider;
          this.newUser.password = user.id;
          this.valido = true;
        }
      )
    }
  }
  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signOut();
    }
  }

}
