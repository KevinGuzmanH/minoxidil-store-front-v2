
export class NuevoUsuario{
  firstname: string;
  lastname: string;
  email: string;
  provider: string;
  phone: string;
  password: string;


  constructor(firstname: string, lastname: string, email: string,provider: string,phone: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.provider = provider;
    this.phone = phone;
    this.password = password;
  }

}
