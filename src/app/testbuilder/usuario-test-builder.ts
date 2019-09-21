import {Publicacao} from '../models/publicacao';
import { Usuario } from '../models/usuario';
import { Comentario } from '../models/comentario';
export class UsuarioTestBuilder {

    static criarUsuario(): Usuario {
        const usuario = new Usuario();
        usuario.id = 1;
        usuario.nome = 'User test';
        usuario.senha = '123';
        usuario.email = 'usertest@gmail.com';
        return usuario;
    }

}