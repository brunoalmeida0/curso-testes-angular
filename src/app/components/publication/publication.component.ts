import { Component, OnInit } from '@angular/core';
import { Publicacao } from '../../models/publicacao';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publicacoes = new Array<Publicacao>();

  constructor(
    public publicationService: PublicationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.publicationService.getPublicacoes()
      .subscribe(publicacoes => this.publicacoes = publicacoes);
  }

  openComentario(publicacao: Publicacao) {
    localStorage.setItem('idPublicacao', publicacao.id.toString());
    this.router.navigate(['/comentario']);
  }

}
