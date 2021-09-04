import {Inject, Injectable} from '@angular/core';
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const ROLES_KEY = 'AuthRoles';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  string:string = "";

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  public setToken(token: string):void{
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  public getToken(): string{
    if (isPlatformBrowser(this.platformId)) {
      this.string = <string>sessionStorage.getItem(TOKEN_KEY);
    }
    return this.string;
  }

  public setEmail(userName: string): void{
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(EMAIL_KEY);
      window.sessionStorage.setItem(EMAIL_KEY, userName);
    }
  }

  public getEmail(): string{
    if (isPlatformBrowser(this.platformId)) {
      this.string = <string>sessionStorage.getItem(EMAIL_KEY);
    }
    return this.string;
  }

  public setRoles(roles: string[]): void{
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(ROLES_KEY);
      window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(roles));
    }
  }

  public getRoles(): string[]{

    if (isPlatformBrowser(this.platformId)) {
      this.roles = JSON.parse(sessionStorage.getItem(ROLES_KEY) || "");
    }
    return this.roles;
  }

  public cerrarSesion():void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.clear();
    }
  }

}
