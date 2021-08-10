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

  public recuperar(correo: string):Observable<string>{
    return this.client.get(this.URL + 'recuperar/' + correo, {responseType: "text"});
  }

  public validarToken(token: string):Observable<boolean>{
    return this.client.get<boolean>(this.URL + 'validartoken/' + token);
  }

  public cambiarPwd(nuevapwd: string, token: string){
    return this.client.get(this.URL + "cambiarpwd/" + token + "/" + nuevapwd,{responseType: "text"});
  }
}
