import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { PublicationService } from 'src/app/services/publication/publication.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  comentarios: Array<Comentario>;

  constructor(
    private publicacaoService: PublicationService;
  ) { }

  ngOnInit() {
    // this.comentario = localStorage.get('comentario');
    console.log( localStorage.getItem('publicacao'))
  }

  getPublicacao() {
    const idPublicacao: string = localStorage.getItem('idPublicacao');
    this.publicacaoService.findById(+idPublicacao)
      .subscribe(publicacao => {
        this.comentarios = publicacao.comentarios;
      });
  }

}
