import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../service/autenticacion/autenticacion.service";
import {AlertasService} from "../../service/alertas/alertas.service";

@Component({
  selector: 'app-send-email-to-confirm',
  templateUrl: './send-email-to-confirm.component.html',
  styleUrls: ['./send-email-to-confirm.component.scss']
})
export class SendEmailToConfirmComponent implements OnInit {

  constructor(private autentication: AutenticacionService,private alertas: AlertasService) { }

  ngOnInit(): void {
  }

  sendConfirmationEmail(email: string){
    this.autentication.sendConfirmEmail(email).subscribe(
      data => {
        this.alertas.succes(data,"Enviado");
      },error => {
        this.alertas.error(error.error,"Error");
      }
    )
  }
}
