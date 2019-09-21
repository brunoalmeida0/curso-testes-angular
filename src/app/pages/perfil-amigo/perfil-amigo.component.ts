import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Publicacao } from 'src/app/models/publicacao';
import { PublicationService } from 'src/app/services/publication/publication.service';

@Component({
  selector: 'app-perfil-amigo',
  templateUrl: './perfil-amigo.component.html',
  styleUrls: ['./perfil-amigo.component.scss']
})
export class PerfilAmigoComponent implements OnInit {

  usuario: Usuario;
  publicacoes: Array<Publicacao>;

  constructor(
    private usuarioService: UsuarioService,
    private publicacaoService: PublicationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.buscarUsuario();
  }

  buscarUsuario(): void {
    const idUsuario = localStorage.getItem('idUsuario');
    this.usuarioService.buscarUsuarioPorId(+idUsuario)
      .subscribe(usuario => {
        this.usuario = usuario;
        this.publicacaoService.buscarPublicacaoPorIdUsuario(this.usuario.id)
          .subscribe(publicacoes => this.publicacoes = publicacoes);
      });
  }

  curtir(publicacao: Publicacao) {
    this.publicacaoService.curtirPublicacao(publicacao);
  }

  openComentario(publicacao: Publicacao) {
    localStorage.setItem('idPublicacao', publicacao.id.toString());
    this.router.navigate(['/comentario']);
  }


}
