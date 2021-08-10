import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from "../../service/autenticacion/autenticacion.service";
import { AlertasService } from "../../service/alertas/alertas.service";

@Component({
  selector: 'app-recuperar-pwd',
  templateUrl: './recuperar-pwd.component.html',
  styleUrls: ['./recuperar-pwd.component.scss']
})
export class RecuperarPwdComponent implements OnInit {

  constructor(private autentication: AutenticacionService,private alertas: AlertasService) { }

  ngOnInit(): void {
  }

  recuperar(email:string){
    this.autentication.recuperar(email).subscribe(
      data => {
        this.alertas.succes(data,"Enviado");
      },error => {
        this.alertas.error(error.error,"Error");
      }
    )
  }
}
