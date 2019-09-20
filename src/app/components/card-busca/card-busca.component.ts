import { Component, OnInit, Input } from '@angular/core';
import { Publicacao } from '../../models/publicacao';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit {
  @Input() usuario: Usuario;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  verPerfil(idUsuario: number) {
    localStorage.setItem('idUsuario', idUsuario.toString());
    this.router.navigate(['/perfil-amigo']);
  }

}
