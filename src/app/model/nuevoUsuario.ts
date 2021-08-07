
export class NuevoUsuario{
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  email: string;
  suscribe: string;
  provider: string;
  password: string;


  constructor(nombre: string, apellido: string, nombreUsuario: string, correo: string,susbribe: string,provider: string, contrase: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario = nombreUsuario;
    this.email = correo;
    this.suscribe = susbribe;
    this.provider = provider;
    this.password = contrase;
  }

}
