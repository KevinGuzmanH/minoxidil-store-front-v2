import {Component, Inject, OnInit} from '@angular/core';
import {TokenService} from "../../Service/token/token.service";
import {AlertasService} from "../../Service/alertas/alertas.service";
import { TimelineMax } from 'gsap';
import { gsap} from "gsap/all";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  loggedIn!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object,private tokenService: TokenService,private alerta: AlertasService) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.tokenService.getToken() != null) {
        this.loggedIn = true;
      }
      ;
      gsap.timeline().from('#circle', {
        opacity: 0,
        duration: 1,
        scale: 0,
        ease: 'back'
      }).from('#min', {
        opacity: 0,
        duration: 1,
        scale: 0,
        ease: 'back'
      })
    }
  }

}
