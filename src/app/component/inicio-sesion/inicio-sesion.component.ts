import {Component, Inject, OnInit} from '@angular/core';
import {LoginUser} from "../../model/loginUser";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import {TokenService} from "../../service/token/token.service";
import {Router} from "@angular/router";
import {AlertasService} from "../../service/alertas/alertas.service";
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
      this.loginUsuario.email = nombreUsuario;
      this.loginUsuario.password = contraseña;

      this.authService.login(this.loginUsuario).subscribe(
        data => {
          this.alerta.succes('Bienvenido de Vuelta', '');
          this.loggedIn = true;
          this.tokenService.setToken(data.access_token);
          this.tokenService.setRoles(data.auth);
          this.router.navigateByUrl('');
        }, error => {
          this.alerta.error(error.error, 'Error')
        }
      );
    }
  }

  signInWithGoogle(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe((user) => {
        this.user = user;
        this.login(user.email, user.id);
      });
    }
  }

  signInWithFB(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authServiceSocial.authState.subscribe((user) => {
        this.user = user;
        this.login(user.email, user.id);
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
