import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Publicacao } from 'src/app/models/publicacao';
import { FormControl } from '@angular/forms';
import { ComentarioService } from 'src/app/services/comentario/comentario.service';
import { Comentario } from 'src/app/models/comentario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  comentarioFormControl = new FormControl('');
  publicacao: Publicacao;
  busca: string;
  usuarios: Array<Usuario>;

  constructor(
    private publicacaoService: PublicationService,
    private comentarioService: ComentarioService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.busca = localStorage.getItem('busca');
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.buscarUsuarios(this.busca)
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }


}
