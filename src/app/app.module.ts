import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './pages/feed/feed.component';
import { MaterialModule } from './material.module';

import {MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogModule} from '@angular/material';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AuthService } from './services/auth/auth.service';
import { PublicationService } from './services/publication/publication.service';
import { ComentarioService } from './services/comentario/comentario.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { BuscaComponent } from './pages/busca/busca.component';
import { CardBuscaComponent } from './components/card-busca/card-busca.component';
import { PerfilAmigoComponent } from './pages/perfil-amigo/perfil-amigo.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    SidebarComponent,
    PublicationComponent,
    LoginComponent,
    ComentarioComponent,
    BuscaComponent,
    CardBuscaComponent,
    PerfilAmigoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ToasterModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    AuthService,
    ToasterService,
    PublicationService,
    ComentarioService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
