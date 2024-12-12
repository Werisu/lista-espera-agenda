import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopFriendsService } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  friends$;

  constructor(private topFriendsService: TopFriendsService) {
    this.friends$ = this.topFriendsService.getFriends();
  }
}
