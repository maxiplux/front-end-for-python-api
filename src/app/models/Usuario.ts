export class Usuario {
  id?: number;
  username?: string;
  password?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  roles?: string[] = [];
}
export interface Token {
  access_token: string;
  token_type: string;

}
