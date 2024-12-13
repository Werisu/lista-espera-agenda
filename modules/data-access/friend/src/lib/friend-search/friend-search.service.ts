import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amigo } from '../models/amigo.model';

@Injectable({
  providedIn: 'root',
})
export class FriendSearchService {
  private http = inject(HttpClient);

  constructor(@Inject('API_URL') private apiUrl: string) {}

  searchByName(name: string): Observable<Amigo[]> {
    return this.http.get<Amigo[]>(`${this.apiUrl}/amigos`, {
      params: { name },
    });
  }

  getById(id: string): Observable<Amigo> {
    return this.http.get<Amigo>(`${this.apiUrl}/amigos/${id}`);
  }

  put(friend: Amigo): Observable<Amigo> {
    return this.http.put<Amigo>(`${this.apiUrl}/amigos/${friend.id}`, friend);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/amigos/${id}`);
  }
}
