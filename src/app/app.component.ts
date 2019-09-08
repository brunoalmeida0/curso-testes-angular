import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redesocial-cursotestes';

  ngOnInit() {
    let teste = 123
    let teste2 = 34

    let soma = teste + teste2

    console.log(soma)
  }
}
