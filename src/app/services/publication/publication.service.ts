import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }

  getPublicacoes(): Observable<Array<Publicacao>> {
    const publicacoes = new Array<Publicacao>();
    const publicacao = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'sem foto';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.hora = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'publicação teste';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;

    publicacoes.push(publicacao);
    publicacoes.push(publicacao);
    publicacoes.push(publicacao);

    return of(publicacoes);
  }

  findById(id: number): Observable<Publicacao> {
    const publicacao = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'sem foto';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.hora = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'publicação teste';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;
    return of(publicacao);
  }
}
