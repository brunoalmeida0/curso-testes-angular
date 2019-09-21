import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8080/socialnet/api/';

  constructor(
    private http: HttpClient
  ) { }

  buscarUsuarios(busca: string): Observable<Array<Usuario>> {
    const usuarios = new Array<Usuario>();
    const usuario = new Usuario();
    usuario.id = 2;
    usuario.nome = 'Fila';
    usuario.email = 'fila@deunidade.com';
    usuario.senha = '123456';
    usuario.foto = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    if (busca.toLowerCase() === usuario.nome.toLowerCase()) {
      usuarios.push(usuario);
      return of(usuarios);
    }
    return null;
  }

  buscarUsuarioPorId(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}users/find/${idUsuario}`);
  }

  novoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}users/add`, usuario);
  }

}
