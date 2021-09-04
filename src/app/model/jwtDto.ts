
export class JwtDto{

  access_token: string;
  token_type: string;
  expires_in: Date;
  auth: string[];


  constructor(access_token: string, token_type: string, expires_in: Date, auth: string[]) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.expires_in = expires_in;
    this.auth = auth;
  }


}
