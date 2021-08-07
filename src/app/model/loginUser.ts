
export class LoginUser{
  nombreUsuario: string;
  password: string;


  constructor(correo: string, contraseña: string) {
    this.nombreUsuario = correo;
    this.password = contraseña;
  }

}
