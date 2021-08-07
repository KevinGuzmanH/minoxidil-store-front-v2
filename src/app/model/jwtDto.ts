
export class JwtDto{
  token: string;
  bearer: string;
  nombreUsuario: string;
  correoUsuario: string;
  authorities: string;


  constructor(token: string, type: string, nombre: string,correoUsuario: string, correo: string, authorities: string) {
    this.token = token;
    this.bearer = type;
    this.nombreUsuario = nombre;
    this.correoUsuario = correoUsuario;
    this.authorities = authorities;
  }


}
