import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil-amigo',
  templateUrl: './perfil-amigo.component.html',
  styleUrls: ['./perfil-amigo.component.scss']
})
export class PerfilAmigoComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  buscarUsuario(): void {
    const idUsuario = localStorage.getItem('idUsuario');
    this.usuarioService.buscarUsuarioPorId(+idUsuario)
      .subscribe(usuario => this.usuario = usuario);

  }


}
