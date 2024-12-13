import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amigo } from '../models/amigo.model';

@Injectable({
  providedIn: 'root',
})
export class TopFriendsService {
  private http = inject(HttpClient);

  constructor(@Inject('API_URL') private apiUrl: string) {}

  getFriends(): Observable<Amigo[]> {
    return this.http.get<Amigo[]>(`${this.apiUrl}/amigos`, {
      params: {
        page: 1,
        limit: 6,
      },
    });
  }
}
