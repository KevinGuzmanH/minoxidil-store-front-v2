import {Component, Inject, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import {AutenticacionService} from "../../service/autenticacion/autenticacion.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  cantidadCompra = 1;
  route!: string;
  total = 30000;
  constructor(@Inject(PLATFORM_ID) private platformId: object,private tokenService: TokenService,private autenticationService: AutenticacionService) { }

  ngOnInit(): void {}

  cambiarCantidad(subir: boolean, gotero: boolean){
    if (subir) {
      if (this.cantidadCompra<=3) {
        this.cantidadCompra++;
      }
    }else {
      if (this.cantidadCompra >= 2){
        this.cantidadCompra--;
      }}
    this.total = this.cantidadCompra * 30000;
    if (gotero){
      this.total += 600;
    }
  }

  goteroSt(checked: boolean){
    if (checked){
      this.total+=600;
    }else {
      this.total-=600;
    }
  }

  compra(checked: boolean){
    const token = this.tokenService.getToken();
    this.autenticationService.registerOrder(token,this.cantidadCompra.toString()).subscribe();
    if (checked){

    }else {
      switch (this.cantidadCompra) {
        case 1:
          this.route = 'https://biz.payulatam.com/L0e54c074D9F933'; break;
        case 2:
          this.route = 'https://biz.payulatam.com/L0e54c03C96148E'; break;
        case 3:
          this.route = 'https://biz.payulatam.com/L0e54c0189EA6AE'; break;
        case 4:
          this.route = 'https://biz.payulatam.com/L0e54c0D2D3077C'; break;
      }
    }

  }
}
