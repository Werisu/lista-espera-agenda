import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Amigo,
  FriendSearchService,
} from '@lista-espera-agenda/friend-data-access';
import { Observable, switchMap } from 'rxjs';
import { getParams } from './get-params';

@Component({
  selector: 'lib-friend-detail',
  imports: [CommonModule],
  templateUrl: './friend-detail.component.html',
  styleUrl: './friend-detail.component.scss',
})
export class FriendDetailComponent {
  private friendSearchService = inject(FriendSearchService);

  friend$: Observable<Amigo> = getParams().pipe(
    switchMap((id) => this.friendSearchService.getById(id))
  );
}
