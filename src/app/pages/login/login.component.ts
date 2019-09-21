import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  entrar() {
    const logou: boolean = this.authService.login(this.emailFormControl.value, this.passwordFormControl.value);

    logou ? this.router.navigate(['/feed']) : console.error('Login ou senha inválidos');
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

}
