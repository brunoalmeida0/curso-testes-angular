import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url = 'http://localhost:8080/socialnet/api/';

  constructor(
    private http: HttpClient
  ) { }

  findById(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.url}comments/find/${id}`);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.url}comments/delete/${id}`);
  }

  addComments(comentario: Comentario) {
    return this.http.post(`${this.url}comments/add`, comentario);
  }
}
