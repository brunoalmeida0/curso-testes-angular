import { Usuario } from './usuario';

export class Comentario {
    id: number;
    usuario: Usuario;
    conteudo: string;
    hora: Date;
}