import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { CadastroComponent } from './cadastro.component';
import { By } from '@angular/platform-browser';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioTestBuilder } from '../../testbuilder/usuario-test-builder';
import { of } from 'rxjs';
import { LoginComponent } from '../login/login.component';


describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async(() => {
    const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['novoUsuario']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: UsuarioService, useValue: usuarioServiceSpy },
        { provide: Router, useValue: routerSpy },

      ]
    })
    .compileComponents();
    usuarioService = TestBed.get(UsuarioService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('preencher todos os inputs de cadastro e cadastrar corretamente', async(() => {
    const inputNome = fixture.debugElement.query(By.css('.input-nome')).nativeElement;
    const inputGithub = fixture.debugElement.query(By.css('.input-github')).nativeElement;
    const inputEmail = fixture.debugElement.query(By.css('.input-email')).nativeElement;
    const inputSenha = fixture.debugElement.query(By.css('.input-senha')).nativeElement;
    const btnCadastrar = fixture.debugElement.query(By.css('.btn-cadastrar')).nativeElement;
    inputNome.value = 'Nome Teste';
    inputNome.dispatchEvent(new Event('input'));

    inputGithub.value = 'Github Teste';
    inputGithub.dispatchEvent(new Event('input'));

    inputEmail.value = 'email@email.com';
    inputEmail.dispatchEvent(new Event('input'));

    inputSenha.value = '12345';
    inputSenha.dispatchEvent(new Event('input'));

    const usuario = UsuarioTestBuilder.criarUsuario();
    usuarioService.novoUsuario.and.returnValue(of(usuario));

    btnCadastrar.dispatchEvent(new Event('click'));
    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });

  }));

  it('não preencher campos obrigatórios e receber feedback de erro', async(() => {
    const inputNome = fixture.debugElement.query(By.css('.input-nome')).nativeElement;
    const inputEmail = fixture.debugElement.query(By.css('.input-email')).nativeElement;
    const inputSenha = fixture.debugElement.query(By.css('.input-senha')).nativeElement;
    const btnCadastrar = fixture.debugElement.query(By.css('.btn-cadastrar')).nativeElement;
    inputNome.value = '';
    inputNome.dispatchEvent(new Event('input'));

    inputEmail.value = '';
    inputEmail.dispatchEvent(new Event('input'));

    inputSenha.value = '';
    inputSenha.dispatchEvent(new Event('input'));

    btnCadastrar.dispatchEvent(new Event('click'));
    expect(component.nomeFormControl.invalid).toBeTruthy();
    expect(component.emailFormControl.invalid).toBeTruthy();
    expect(component.senhaFormControl.invalid).toBeTruthy();
    fixture.whenStable().then(() => {
      expect(router.navigate).not.toHaveBeenCalled();
    });
  }));
});
