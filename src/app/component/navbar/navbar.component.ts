import {Component, Inject, OnInit} from '@angular/core';
import {SocialAuthService} from "angularx-social-login";
import {AutenticacionService} from "../../Service/autenticacion/autenticacion.service";
import {Router} from "@angular/router";
import {AlertasService} from "../../Service/alertas/alertas.service";
import {TokenService} from "../../Service/token/token.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private authService: AutenticacionService
    , private tokenService: TokenService
    , private router: Router
    , private alerta: AlertasService
    , private authServiceSocial: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken() != null) {
      this.loggedIn = true;
    }
    ;
  }

  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authServiceSocial.signOut();
      this.loggedIn = false;
      this.tokenService.cerrarSesion();
    }
  }

  avisoLogin(){
    this.alerta.informar('Por favor, Ingresa a tu cuenta','Alerta');
  }
}
