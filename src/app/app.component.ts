import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrarMenu = true; //TODO Mudar para false

  constructor(
    private authService: AuthService
  ) { }

    ngOnInit(): void {
      this.authService.mostrarMenuEmitter.subscribe(
        mostrarMenu => this.mostrarMenu = mostrarMenu
      );
    }

}
