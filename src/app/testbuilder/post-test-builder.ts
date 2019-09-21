import {Publicacao} from '../models/publicacao';
import { Usuario } from '../models/usuario';
import { Comentario } from '../models/comentario';
export class PostTestBuilder {

    static criarPost(): Publicacao {
        const post = new Publicacao();
        post.id = 1;
        post.usuario = new Usuario();
        post.hora = new Date();
        post.curtidas = 2;
        post.conteudo = 'Conteudo teste';
        post.comentarios = new Array<Comentario>();
        return post;
    }

}