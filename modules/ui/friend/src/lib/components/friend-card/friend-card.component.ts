import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Amigo } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-friend-card',
  imports: [CommonModule],
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss',
})
export class FriendCardComponent {
  @Input({ required: true }) friend!: Amigo;
}
