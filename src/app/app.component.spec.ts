import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';

describe('AppComponent', () => {

  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['mostrarMenuEmitter']);
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      providers:[
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();
    authService = TestBed.get(AuthService);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
