import { Comentario } from './comentario';
import { Usuario } from './usuario';

export class Publicacao {
    id: number;
    conteudo: string;
    comentarios: Comentario[];
    usuario: Usuario;
    curtidas: number;
    hora: Date;
}