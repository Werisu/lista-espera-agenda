import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Amigo, Encounter } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-encounters-card',
  imports: [CommonModule],
  templateUrl: './encounters-card.component.html',
  styleUrl: './encounters-card.component.scss',
})
export class EncountersCardComponent {
  @Input({ required: true }) encounter!: Encounter;
  @Input({ required: true }) friend!: Amigo;
}
