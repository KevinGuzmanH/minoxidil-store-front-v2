import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toastr: ToastrService) { }

  succes(titulo: string,texto: string){
    this.toastr.success(titulo,texto);
  }
  error(titulo: string,texto: string){
    this.toastr.error(titulo,texto);
  }
  informar(titulo: string,texto: string){
    this.toastr.info(titulo,texto);
  }
}
