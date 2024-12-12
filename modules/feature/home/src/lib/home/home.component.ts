import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockFriends } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  friends = mockFriends;
}
