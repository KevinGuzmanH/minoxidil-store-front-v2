import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NuevoUsuario} from "../../model/nuevoUsuario";
import {JwtDto} from "../../model/jwtDto";
import {LoginUser} from "../../model/loginUser";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  URL = 'https://tiendamin-carlos-kevin.herokuapp.com/auth/';
  constructor(private client: HttpClient) { }

  public newUser(cuenta: NuevoUsuario){
    return this.client.post(this.URL + 'nuevo',cuenta,{responseType: "text"});
  }

  public login(cuenta: LoginUser): Observable<JwtDto>{
    return this.client.post<JwtDto>(this.URL + 'login', cuenta);
  }

  public register(correo: string){
    return this.client.put(this.URL + 'register',correo,{responseType: "text"});
  }
}
