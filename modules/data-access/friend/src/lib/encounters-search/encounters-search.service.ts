import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encounter } from '../models/amigo.model';

@Injectable({
  providedIn: 'root',
})
export class EncountersSearchService {
  private http = inject(HttpClient);

  constructor(@Inject('API_URL') private apiUrl: string) {}

  searchByLocation(location: string): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(`${this.apiUrl}/amigos`, {
      params: { location },
    });
  }

  getById(id: string): Observable<Encounter> {
    return this.http.get<Encounter>(`${this.apiUrl}/encounters/${id}`);
  }

  put(encounter: Encounter): Observable<Encounter> {
    return this.http.put<Encounter>(
      `${this.apiUrl}/encounters/${encounter.id}`,
      encounter
    );
  }
}
