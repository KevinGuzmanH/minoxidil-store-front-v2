import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NuevoUsuario} from "../../model/nuevoUsuario";
import {JwtDto} from "../../model/jwtDto";
import {LoginUser} from "../../model/loginUser";
import set = gsap.set;

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  URL = 'https://mincookir.herokuapp.com/auth/';


  constructor(private client: HttpClient) { }

  public newUser(cuenta: NuevoUsuario){
    const headers = new HttpHeaders()
      .set('content-type','application/json');
    return this.client.post(this.URL + 'new',cuenta,{'headers':headers});
  }

  public login(cuenta: LoginUser): Observable<JwtDto>{
    return this.client.post<JwtDto>(this.URL + 'login', cuenta);
  }

  public recuperar(correo: string){
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('email', correo);
    return this.client.get(this.URL + 'sendRecoverPwd', {'headers': headers});
  }

  public sendConfirmEmail(correo: string):Observable<string>{
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('email', correo);
    return this.client.get<string>(this.URL + 'sendConfirmationEmail', {'headers': headers});
  }

  public confirmEmail(token: string):Observable<boolean>{
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('access_token', token);
    return this.client.get<boolean>(this.URL + 'confirmemail', {'headers': headers});
  }

  public validarToken(token: string):Observable<boolean>{
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('access_token',token)
    return this.client.get<boolean>(this.URL + 'validateToken',{'headers': headers});
  }

  public cambiarPwd(nuevapwd: string, token: string):Observable<string>{
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('access_token',token)
      .set('newpwd',nuevapwd);
   return this.client.get<string>(this.URL + 'changePwd',{'headers': headers});
  }

  public registerOrder(token: string,amount: string){
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('access_token',token)
      .set('amount',amount)
   return this.client.post(this.URL + 'registerOrder',null,{'headers': headers});
  }
}
