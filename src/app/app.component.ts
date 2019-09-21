import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrarMenu = false;
  usuarioAtual: Usuario;

  constructor(
    private authService: AuthService
  ) { }

    ngOnInit(): void {
      this.usuarioAtual = this.authService.usuarioAtual;
      this.authService.mostrarMenuEmitter.subscribe(
        mostrarMenu => this.mostrarMenu = mostrarMenu
      );
    }

}
