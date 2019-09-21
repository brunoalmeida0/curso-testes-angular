import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;
  let navigateSpy;

  beforeEach(async(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logoff']);

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([])
       ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sair deve encerrar a sessão e navegar para o login', () => {
    component.sair();
    expect(authService.logoff).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('home deve redirecionar para o feed', () => {
    component.home();
    expect(navigateSpy).toHaveBeenCalledWith(['/feed']);
  });

  it('buscarContato deve adicionar a pesquisa no localStorage e redirecionar para a página de busca', () => {
    component.buscarContatoFormControl.setValue('Pesquisa');
    component.buscarContato();
    expect(localStorage.getItem('busca')).toBe(component.buscarContatoFormControl.value);
    expect(navigateSpy).toHaveBeenCalledWith(['/busca']);
  });


});
