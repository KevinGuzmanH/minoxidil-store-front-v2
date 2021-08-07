import { Component, OnInit } from '@angular/core';
import {Inject} from "@angular/core";
import {TokenService} from "../../service/token/token.service";
import {AlertasService} from "../../service/alertas/alertas.service";
import {AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loggedIn = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private tokenService: TokenService,
              private alerta: AlertasService,
              private authService: AutenticacionService) { };

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.tokenService.getToken() != null) {
        this.loggedIn = true;
      }
    }
  };

  suscribe(){
    if (isPlatformBrowser(this.platformId)) {
      let correo = sessionStorage.getItem('correoUsuario') || '';
      this.authService.register(correo).subscribe(
        data => {
          console.log(data)
          this.alerta.succes(data,"Alerta")
        },error => {
          console.log(error)
          this.alerta.informar(error.error,'Alerta');
        }
      );
    }
  }
}
