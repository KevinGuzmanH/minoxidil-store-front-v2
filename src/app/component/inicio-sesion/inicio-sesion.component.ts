import {Component, Inject, OnInit} from '@angular/core';
import {LoginUser} from "../../model/loginUser";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {AutenticacionService} from "../../Service/autenticacion/autenticacion.service";
import {TokenService} from "../../Service/token/token.service";
import {Router} from "@angular/router";
import {AlertasService} from "../../Service/alertas/alertas.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  loginUsuario = new LoginUser('','');
  user!: SocialUser;
  loggedIn!: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private authService: AutenticacionService
    ,private tokenService: TokenService
    ,private router: Router
    ,private alerta: AlertasService
    ,private authServiceSocial: SocialAuthService) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.tokenService.getToken() != null) {
        this.loggedIn = true;
      }
    }
  }

  login(nombreUsuario: string, contraseña: string){
    if (isPlatformBrowser(this.platformId)) {
      this.loginUsuario.nombreUsuario = nombreUsuario;
      this.loginUsuario.password = contraseña;

      this.authService.login(this.loginUsuario).subscribe(
        data => {
          this.alerta.succes('Bienvenido de vuelta', '');
          this.loggedIn = true;
          sessionStorage.setItem('correoUsuario', data.correoUsuario);
          this.router.navigateByUrl('');
          this.tokenService.setToken(data.token);
        }, error => {
          this.alerta.error(error.error, 'Error')
          console.log(error.error);
        }
      );
    }
  }

  signInWithGoogle(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe((user) => {
        this.user = user;
        this.login(user.id, user.id);
      });
    }
  }

  signInWithFB(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe((user) => {
        this.user = user;
        this.login(user.id, user.id);
      });
    }
  }

  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signOut();
      this.loggedIn = false;
      this.tokenService.cerrarSesion();
    }
  }

}
