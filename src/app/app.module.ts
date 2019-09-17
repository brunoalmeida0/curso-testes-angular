import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogComentarioComponent } from './components/dialog-comentario/dialog-comentario.component';
import { FeedComponent } from './pages/feed/feed.component';
import { MaterialModule } from './material.module';

import {MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PublicationComponent } from './components/publication/publication.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AuthService } from './services/auth/auth.service';
import { PublicationService } from './services/publication/publication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    SidebarComponent,
    PublicationComponent,
    LoginComponent,
    DialogComentarioComponent
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
    ToasterModule.forRoot()
  ],
  providers: [
    AuthService,
    ToasterService,
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
