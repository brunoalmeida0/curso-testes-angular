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
    const publicacao2 = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'https://blog.dankicode.com/wp-content/uploads/2018/04/como-ser-um-bom-programador.png';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.data = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'Publicação Teste 1';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;

    publicacao2.id = 2;
    publicacao2.comentarios = [comentario];
    publicacao2.conteudo = 'Publicação Teste 2';
    publicacao2.hora = new Date();
    publicacao2.curtidas = 2;
    publicacao2.usuario = usuario;

    this.publicacoes.push(publicacao);
    this.publicacoes.push(publicacao2);

    return of(this.publicacoes);
  }

  findById(id: number): Observable<Publicacao> {
    const publicacao = new Publicacao();

    const comentario = new Comentario();
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'User Teste';
    usuario.foto = 'https://blog.dankicode.com/wp-content/uploads/2018/04/como-ser-um-bom-programador.png';
    usuario.senha = '123465';
    usuario.email = 'email@teste.com';

    comentario.id = 1;
    comentario.conteudo = 'conteúdo teste';
    comentario.data = new Date();
    comentario.usuario = usuario;

    publicacao.id = 1;
    publicacao.comentarios = [comentario];
    publicacao.conteudo = 'publicacao1';
    publicacao.hora = new Date();
    publicacao.curtidas = 2;
    publicacao.usuario = usuario;
    return of(publicacao);
  }

  curtirPublicacao(publicacao: Publicacao) {
    publicacao.curtidas++;
  }

  criarPublicacao(publicacao: Publicacao) {
    this.publicacoes.push(publicacao);
  }

}