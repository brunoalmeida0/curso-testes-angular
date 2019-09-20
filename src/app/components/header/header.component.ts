import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buscarContatoFormControl = new FormControl('');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair() {
    this.authService.logoff();
    this.router.navigate(['/login']);
  }

  buscarContato() {
    localStorage.setItem('busca', this.buscarContatoFormControl.value);
    this.router.navigate(['/busca']);
  }

}
