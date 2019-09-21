import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { BuscaComponent } from './busca.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UsuarioTestBuilder } from 'src/app/testbuilder/usuario-test-builder';
import { of, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;

  beforeEach(async(() => {
    const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['buscarUsuarios']);
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: UsuarioService, useValue: usuarioServiceSpy }
      ]
    })
    .compileComponents();
    usuarioService = TestBed.get(UsuarioService);
  }));


  it('buscarUsuarios deve buscar usuários corretamente', async(() => {
    const usuario = UsuarioTestBuilder.criarUsuario();
    const usuarios = new Array<Usuario>();
    usuarios.push(usuario);
    usuarioService.buscarUsuarios.and.returnValue(of(usuarios));
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.usuarios).toBe(usuarios);
    });
  }));

});
