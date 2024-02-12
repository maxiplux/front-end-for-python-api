import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Token, Usuario} from '../models/Usuario';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario!: Usuario;

  private _token!: string;

  constructor(private http: HttpClient) {


  }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    }
    else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      const usuarioString = sessionStorage.getItem('usuario');
      this._usuario = usuarioString ? JSON.parse(usuarioString) as Usuario : new Usuario();
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token') ?? '';
      return this._token;
    }
    return '';
  }

  login(usuario: Usuario): Observable<Token> {

    const urlEndpoint = `${environment.apiUrl}/token`.replace("localhost", window.location.hostname);





     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       })

     };


    const body = { username: usuario.username, password: usuario.password};

    return this.http.post<Token>(urlEndpoint, body, httpOptions);
  }

  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.nombre = 'admin';
    this._usuario.apellido =  'demo';
    this._usuario.email = 'admin@admin.com' ;
    this._usuario.username = 'admin';
    this._usuario.roles = ['ROLE_ADMIN', 'ROLE_USER'];
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {

    if (accessToken != null && accessToken != '')
    {
      return accessToken;
    }
    return null;
  }

  isAuthenticated(): boolean
  {
    let payload = this.obtenerDatosToken(this.token);

    if (payload != null ) {
      return true;
    }
    return false;
  }

  hasRole(role: string): boolean {
    if (this.usuario?.roles?.includes(role))
    {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = '';
    this._usuario = new Usuario();
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }
}
