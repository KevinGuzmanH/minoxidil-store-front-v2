import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.scss']
})
export class EmailConfirmedComponent implements OnInit {

  token: string = "";
  valido: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,private autentication: AutenticacionService,@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.token = params.token;
    });
    this.validarTokenYHabilitar();
  }

  validarTokenYHabilitar(){
    this.autentication.confirmEmail(this.token).subscribe(
      data => {
        this.valido = data;
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
             window.location.href = "https://minoxidilfront.herokuapp.com/inicio/iniciarSesion";
          }
        }, 5000);
      },error => {
        this.valido = false;
      }
    );
  }
}
