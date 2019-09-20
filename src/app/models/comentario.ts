import { Usuario } from './usuario';

export class Comentario {
    id: number;
    usuario: Usuario;
    conteudo: string;
    data: Date;
    curtidas: number;
}