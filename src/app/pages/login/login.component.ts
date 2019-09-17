import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
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
    private toasterService: ToasterService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    console.log('login');
  }

  entrar() {
    if(this.emailFormControl.valid === false || this.passwordFormControl.valid === false) {
      this.toasterService.pop('error', 'Login ou senha inválidos');
      return;
    }

    const logou: boolean = this.authService.login(this.emailFormControl.value, this.passwordFormControl.value);

    logou ? this.router.navigate(['/feed']) : this.toasterService.pop('error', 'Login ou senha inválidos');
  }

}
