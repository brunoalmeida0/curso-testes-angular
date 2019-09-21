import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual: Usuario;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuarioAtual = this.usuarioService.getUsuarioAtual();
  }

  login(login: string, senha: string): boolean {
    if (login === this.usuarioAtual.email && senha === this.usuarioAtual.senha) {
      this.mostrarMenuEmitter.emit(true);
      return true;
    }
    this.mostrarMenuEmitter.emit(false);
    return false;
  }

  logoff() {
    this.mostrarMenuEmitter.emit(false);
  }
}
