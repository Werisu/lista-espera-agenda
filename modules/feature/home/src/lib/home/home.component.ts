import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Amigo,
  Encounter,
  EncountersSearchService,
  FriendNamePipe,
  TopFriendsService,
} from '@lista-espera-agenda/friend-data-access';
import {
  EncountersCardComponent,
  FriendCardComponent,
} from '@lista-espera-agenda/friend-ui';
import { combineLatest, map, Observable } from 'rxjs';
import { OrderByMeetingsPipe } from '../pipes/order-by-meetings.pipe';

@Component({
  selector: 'lib-home',
  imports: [
    CommonModule,
    FriendCardComponent,
    OrderByMeetingsPipe,
    EncountersCardComponent,
    FriendNamePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  friends$: Observable<Amigo[]>;
  encounters$: Observable<Encounter[]>;
  encountersWithFriendNames$;

  constructor(
    private topFriendsService: TopFriendsService,
    private encountersSearchService: EncountersSearchService
  ) {
    this.friends$ = this.topFriendsService.getFriends();
    this.encounters$ =
      this.encountersSearchService.getEncountersByStatus('Confirmado');

    this.encountersWithFriendNames$ = combineLatest([
      this.encounters$,
      this.friends$,
    ]).pipe(
      map(([encounters, friends]) =>
        encounters.map((encounter) => ({
          ...encounter,
          friendName:
            friends.find((friend) => friend.id === encounter.amigoId)?.name ||
            'Desconhecido',
        }))
      )
    );
  }
}
