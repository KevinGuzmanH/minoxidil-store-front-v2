import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutenticacionService } from "../../service/autenticacion/autenticacion.service";
import { AlertasService } from "../../service/alertas/alertas.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-recuperar-pwd-final',
  templateUrl: './recuperar-pwd-final.component.html',
  styleUrls: ['./recuperar-pwd-final.component.scss']
})
export class RecuperarPwdFinalComponent implements OnInit {

  token: string = "";
  valido: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object,private activatedRoute: ActivatedRoute,private autentication: AutenticacionService,private alertas: AlertasService) { }

  email: string = "Email a cambiar";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.token = params.token;
    });
    this.recuperar();
  }

  recuperar(){
    this.autentication.validarToken(this.token).subscribe(
      data => {
        this.valido = data;
      }
    );
  }

  cambiarPwd(nuevaPwd: string){
    this.autentication.cambiarPwd(nuevaPwd,this.token).subscribe(
      data => {
        this.alertas.succes(data,"Aviso");
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
            window.location.href = "https://minoxidil-nm.herokuapp.com/inicio/iniciarSesion";
          }
        }, 5000);

      },error => {
        this.alertas.succes(error,"Error")
      }
    )
  }

   wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }
}
