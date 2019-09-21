import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { CardBuscaComponent } from './card-busca.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from 'src/app/models/usuario';
import { By } from '@angular/platform-browser';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([]),
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBuscaComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    component.usuario = new Usuario();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TESTES DE COMPONENTE
  it('verPerfil deve setar o id do usuário no localStorage e navegar para perfil-amigo', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.verPerfil(1);
    expect(localStorage.length).toBe(1);
    expect(localStorage.getItem('idUsuario')).toBe('1');
    expect(navigateSpy).toHaveBeenCalledWith(['/perfil-amigo']);
  });

  it('Após iniciar o componente o usuário deve ser criado', () => {
    component.ngOnInit();
    expect(component.usuario).not.toBeNull();
  });

  // TESTES DE HTML
  it('Ao clicar no card, deve ser setado o id do usuário clicado no localStorage e nevegar para perfil-amigo', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const buttonNavegar = fixture.debugElement.nativeElement.querySelector('#card-usuario');
    buttonNavegar.click();
    expect(localStorage.length).toBe(1);
    expect(localStorage.getItem('idUsuario')).toBe('1');
    expect(navigateSpy).toHaveBeenCalledWith(['/perfil-amigo']);
  });

  // if('Imagem do usuário deve aparecer se o usuário')
  // TESTES DE CSS

});
