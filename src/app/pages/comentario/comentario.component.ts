import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Publicacao } from 'src/app/models/publicacao';
import { FormControl } from '@angular/forms';
import { ComentarioService } from 'src/app/services/comentario/comentario.service';
import { Comentario } from 'src/app/models/comentario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  comentarioFormControl = new FormControl('');

  publicacao: Publicacao;

  constructor(
    private publicacaoService: PublicationService,
    private comentarioService: ComentarioService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getPublicacao();
  }

  getPublicacao() {
    const idPublicacao: string = localStorage.getItem('idPublicacao');
    this.publicacaoService.findById(+idPublicacao)
      .subscribe(publicacao => {
        this.publicacao = publicacao;
        console.log(this.publicacao);
      });
  }

  comentar() {
    const comentario = new Comentario();
    comentario.data = new Date();
    comentario.conteudo = this.comentarioFormControl.value;
    comentario.usuario =  this.usuarioService.getUsuarioAtual();
    comentario.publicacao = this.publicacao.id;
    this.comentarioService.addComments(comentario);
  }

  // curtir(comentario: Comentario) {
  //   this.comentarioService.curtirComentario(comentario);
  // }

}
