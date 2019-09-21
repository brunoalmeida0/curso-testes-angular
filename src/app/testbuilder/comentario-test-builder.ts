import {Publicacao} from '../models/publicacao';
import { Usuario } from '../models/usuario';
import { Comentario } from '../models/comentario';
import { UsuarioTestBuilder } from './usuario-test-builder';
export class ComentarioTestBuilder {

    static criarComentario(): Comentario {
        const comentario = new Comentario();
        comentario.id = 1;
        comentario.conteudo = 'comentario test';
        comentario.curtidas = 2;
        comentario.publicacao = 1;
        comentario.usuario = UsuarioTestBuilder.criarUsuario();
        return comentario;
    }

}