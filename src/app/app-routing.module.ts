import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { PerfilAmigoComponent } from './pages/perfil-amigo/perfil-amigo.component';


const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'comentario', component: ComentarioComponent},
  {path: 'busca', component: BuscaComponent},
  {path: 'perfil-amigo', component: PerfilAmigoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
