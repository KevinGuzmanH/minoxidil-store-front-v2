import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import { NuevoUsuario} from "../../model/nuevoUsuario";
import { Router } from "@angular/router";
import { AlertasService } from "../../service/alertas/alertas.service";
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser = new NuevoUsuario('','','','','NO','PAGE','');
  user!: SocialUser;
  loggedIn!: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private authService: AutenticacionService
    ,private router: Router
    ,private alerta: AlertasService
    ,private authServiceSocial: SocialAuthService
  ) { }

  ngOnInit(): void {

  }

  registrar(valido: boolean, nombre: string, apellido: string,nombreUsuario: string, correo: string,suscribe: boolean,provider: string, contrase: string) {
    this.newUser.nombre = nombre;
    this.newUser.apellido = apellido;
    this.newUser.nombreUsuario = nombreUsuario;
    this.newUser.email = correo;
    this.newUser.provider = provider;
    this.newUser.password = contrase;
    if (suscribe){
      this.newUser.suscribe = 'YES'
    }

    if (isPlatformBrowser(this.platformId)) {
      if (valido) {
        this.authService.newUser(this.newUser).subscribe(
          data => {
            this.alerta.succes('Listo, Inicia sesión', '');
            this.router.navigate(['inicio']);
          }, error => {
            this.alerta.error(error.error, 'Error');
            console.log(error.error.mensaje)
          }
        );
      } else {
        this.alerta.error('Campos Invalidos', 'Error')
      }
    }
  }

  registerInWithGoogle(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe(
        (user) => {
          this.registrar(true, user.firstName, user.lastName, user.id, user.email, false, user.provider, user.id);
        }
      )
    }
  }

  registerInWithFB(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe(
        (user) => {
          this.registrar(true, user.firstName, user.lastName, user.id, user.email, false, user.provider, user.id);
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
