import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nomeFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  senhaFormControl = new FormControl('', [
    Validators.required
  ]);

  githubFormControl = new FormControl('');

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrar() {
    const usuario = new Usuario();
    usuario.nome = this.nomeFormControl.value;
    usuario.email = this.emailFormControl.value;
    usuario.senha = this.senhaFormControl.value;
    usuario.githubUser = this.githubFormControl.value;
    this.usuarioService.buscarUsuarioPorId(1)
      .subscribe(_ => this.router.navigate(['/login']),
      err => console.error(err));

  }

  cancelar() {
    this.router.navigate(['/login']);
  }

}
