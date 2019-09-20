import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  
  publicacoes = new Array<Publicacao>();
  constructor() { }

  getPublicacoes(): Observable<Array<Publicacao>> {
    const publicacao = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.data = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'publicação teste';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;

    this.publicacoes.push(publicacao);
    this.publicacoes.push(publicacao);
    this.publicacoes.push(publicacao);

    return of(this.publicacoes);
  }

  findById(id: number): Observable<Publicacao> {
    const publicacao = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.data = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'publicação teste';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;
    return of(publicacao);
  }

  curtirPublicacao(publicacao: Publicacao) {
    publicacao.curtidas++;
    //persistir
  }

  criarPublicacao(publicacao: Publicacao) {
    this.publicacoes.push(publicacao);
  }

  buscarPublicacaoPorIdUsuario(idUsuario): Observable<Array<Publicacao>> {
    return this.getPublicacoes();
  }

}
