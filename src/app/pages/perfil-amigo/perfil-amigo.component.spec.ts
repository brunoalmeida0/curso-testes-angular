import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { PerfilAmigoComponent } from './perfil-amigo.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { of } from 'rxjs';
import { UsuarioTestBuilder } from 'src/app/testbuilder/usuario-test-builder';
import { PostTestBuilder } from 'src/app/testbuilder/post-test-builder';
import { Publicacao } from 'src/app/models/publicacao';

describe('PerfilAmigoComponent', () => {
  let component: PerfilAmigoComponent;
  let fixture: ComponentFixture<PerfilAmigoComponent>;
  let publicationService: jasmine.SpyObj<PublicationService>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;

  beforeEach(async(() => {
    const publicationServiceSpy = jasmine.createSpyObj('PublicationService', ['getPublicacoes', 'findById']);
    const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['buscarUsuarioPorId']);
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: PublicationService, useValue: publicationServiceSpy },
        { provide: UsuarioService, useValue: usuarioServiceSpy }
      ]
    })
    .compileComponents();
    publicationService = TestBed.get(PublicationService);
    usuarioService = TestBed.get(UsuarioService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAmigoComponent);
    component = fixture.componentInstance;
    component.publicacoes = [];
  });

  it('buscar publicações do usuario ao visitar o perfil', async(() => {
    localStorage.setItem('idUsuario', '1');
    const usuario = UsuarioTestBuilder.criarUsuario();
    const publicacao = PostTestBuilder.criarPost();
    const publicacoes = new Array<Publicacao>();
    publicacoes.push(publicacao);
    usuarioService.buscarUsuarioPorId.and.returnValue(of(usuario));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // expect(component.publicacoes.includes(publicacao)).toBeTruthy();
    });
  }));
});
