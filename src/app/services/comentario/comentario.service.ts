import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor() { }

  adicionarComentario(comentario: Comentario, publicacao: Publicacao) {
    //fazer um post para salvar o comentário na publicação
    publicacao.comentarios.push(comentario);
  }
}
