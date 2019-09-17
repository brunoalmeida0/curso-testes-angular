import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComentarioComponent } from '../dialog-comentario/dialog-comentario.component';
import { Publicacao } from '../../models/publicacao';
import { PublicationService } from 'src/app/services/publication/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public publicationService: PublicationService
    ) { }

  ngOnInit() {
    this.publicationService.getPublicacoes();
  }

  openDialogComentario(publicacao: Publicacao) {
    const dialogRef = this.dialog.open(DialogComentarioComponent, {
      width: '250px',
      data: {publicacao}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
