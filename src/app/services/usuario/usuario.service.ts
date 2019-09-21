import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarioAtual(): Usuario {
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'Shiba';
    usuario.email = 'testes@deunidade.com';
    usuario.foto = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    usuario.senha = '123456';
    return usuario;
  }

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
    const usuario = new Usuario();
    usuario.id = 2;
    usuario.nome = 'Fila';
    usuario.email = 'fila@deunidade.com';
    usuario.senha = '123456';
    usuario.foto = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    return of(usuario);
  }

  salvarUsuario(usuario: Usuario): Observable<Usuario> {
    return of(usuario);
    //TODO implementar usuário
  }

}
