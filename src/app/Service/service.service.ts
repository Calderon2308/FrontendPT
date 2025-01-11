import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  /*getlista(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}/project/crear`)
  }*/

  postCrearUsuario(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}/project/crear`, user)
  }

  validarUsuario(user: Usuario): Observable<string> {
    return this.http.put<string>(`${this.URL}/project/validar`, user)
  }

  CrearNoticia(data: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.URL}/project/noticia/crear`, data)
  }

}
