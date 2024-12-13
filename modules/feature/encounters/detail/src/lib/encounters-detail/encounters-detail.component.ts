import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Amigo,
  EncountersSearchService,
  FriendSearchService,
} from '@lista-espera-agenda/friend-data-access';
import { getParams } from '@lista-espera-agenda/friend-detail';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'lib-encounters-detail',
  imports: [CommonModule],
  templateUrl: './encounters-detail.component.html',
  styleUrl: './encounters-detail.component.scss',
})
export class EncountersDetailComponent {
  private friendSearchService = inject(FriendSearchService);
  private encountersSearchService = inject(EncountersSearchService);

  encounter$ = getParams().pipe(
    switchMap((id) => {
      return this.encountersSearchService.getById(id);
    })
  );

  friend$: Observable<Amigo> = this.encounter$.pipe(
    switchMap((encounter) => {
      return this.friendSearchService.getById(encounter.amigoId);
    })
  );
}
