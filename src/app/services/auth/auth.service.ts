import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(login: string, senha: string): boolean {
    if (login === 'testesunitarios@testes.com' && senha === '123456') {
      return true;
    }
    return false;
  }
}
