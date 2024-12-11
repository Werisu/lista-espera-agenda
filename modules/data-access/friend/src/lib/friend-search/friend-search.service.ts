import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amigo } from '../models/amigo.model';

@Injectable({
  providedIn: 'root',
})
export class FriendSearchService {
  readonly apiUrl = 'https://6759e30b099e3090dbe339e5.mockapi.io';
  private http = inject(HttpClient);

  searchByName(name: string): Observable<Amigo[]> {
    return this.http.get<Amigo[]>(`${this.apiUrl}/amigos`, {
      params: { name },
    });
  }

  getById(id: string): Observable<Amigo> {
    return this.http.get<Amigo>(`${this.apiUrl}/amigos/${id}`);
  }
}
