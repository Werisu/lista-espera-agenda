import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Amigo,
  Encounter,
  FriendSearchService,
  mockFriends,
} from '@lista-espera-agenda/friend-data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-encounters-detail',
  imports: [CommonModule],
  templateUrl: './encounters-detail.component.html',
  styleUrl: './encounters-detail.component.scss',
})
export class EncountersDetailComponent {
  card: Encounter = mockFriends[0].encounters[0];
  friend$: Observable<Amigo> = inject(FriendSearchService).getById(
    this.card.amigoId
  );
}
