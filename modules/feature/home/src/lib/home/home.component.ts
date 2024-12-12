import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopFriendsService } from '@lista-espera-agenda/friend-data-access';
import { FriendCardComponent } from '@lista-espera-agenda/friend-ui';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, FriendCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  friends$;

  constructor(private topFriendsService: TopFriendsService) {
    this.friends$ = this.topFriendsService.getFriends();
  }
}
