import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { PublicationComponent } from './publication.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { of } from 'rxjs';

import { PostTestBuilder } from '../../testbuilder/post-test-builder';
import { UsuarioTestBuilder } from '../../testbuilder/usuario-test-builder';

describe('PublicationComponent', () => {
  let component: PublicationComponent;
  let fixture: ComponentFixture<PublicationComponent>;

  let publicationService: jasmine.SpyObj<PublicationService>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;
  let router: Router;
  let navigateSpy;

  beforeEach(async(() => {
    const publicationServiceSpy = jasmine.createSpyObj('PublicationService', ['getPublicacoes', 'curtirPublicacao', 'novaPublicacao']);
    const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['buscarUsuarioPorId']);

    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule.withRoutes([]) ],
      providers: [
        { provide: PublicationService, useValue: publicationServiceSpy },
        { provide: UsuarioService, useValue: usuarioServiceSpy }
      ]
    })
    .compileComponents();
    publicationService = TestBed.get(PublicationService);
    usuarioService = TestBed.get(UsuarioService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    publicationService.getPublicacoes.and.returnValue(of([]));
    fixture = TestBed.createComponent(PublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openComentario deve redirecionar para a página de comentarios', () => {
    const publicacao = PostTestBuilder.criarPost();
    component.openComentario(publicacao);
    expect(localStorage.getItem('idPublicacao')).toBe(publicacao.id.toString());
    expect(navigateSpy).toHaveBeenCalledWith(['/comentario']);
  });

  it('publicar deve publicar uma nova publicação com o usuário atual', () => {
    const usuario = UsuarioTestBuilder.criarUsuario();
    const publicacao = PostTestBuilder.criarPost();
    component.publicacaoFormControl.setValue('Conteudo da publicação para testar');
    usuarioService.buscarUsuarioPorId.and.returnValue(of(usuario));
    publicationService.novaPublicacao.and.returnValue(of(publicacao));
    fixture.whenStable().then(_ => {
      expect(component.publicacoes[0]).toBe(publicacao);
    });
  })


});
