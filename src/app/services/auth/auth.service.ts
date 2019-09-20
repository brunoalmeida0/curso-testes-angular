import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuarioAtual = this.usuarioService.getUsuarioAtual();
  }

  login(login: string, senha: string): boolean {
    if (login === this.usuarioAtual.email && senha === this.usuarioAtual.senha) {
      return true;
    }
    return false;
  }

  logoff() {
    this.usuarioAtual = null;
  }
}
