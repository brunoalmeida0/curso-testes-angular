import { Component, OnInit } from '@angular/core';
import { Publicacao } from '../../models/publicacao';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publicacoes = new Array<Publicacao>();
  publicacaoFormControl = new FormControl('');

  constructor(
    private publicacaoService: PublicationService,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
    this.publicacaoService.getPublicacoes()
      .subscribe(publicacoes => this.publicacoes = publicacoes);
  }

  openComentario(publicacao: Publicacao) {
    localStorage.setItem('idPublicacao', publicacao.id.toString());
    this.router.navigate(['/comentario']);
  }

  curtir(publicacao: Publicacao) {
    this.publicacaoService.curtirPublicacao(publicacao);
  }

  publicar() {
    this.usuarioService.buscarUsuarioPorId(1)
    .subscribe(usuario => {
      const publicacao = new Publicacao();
      publicacao.usuario = usuario;
      publicacao.hora = new Date();
      publicacao.conteudo = this.publicacaoFormControl.value;
      this.publicacaoService.novaPublicacao(publicacao)
        .subscribe(publicacaoSalva => this.publicacoes.push(publicacaoSalva));
    }, err => console.log(err));
  }

}
