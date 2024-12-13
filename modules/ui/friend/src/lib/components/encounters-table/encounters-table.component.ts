import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Encounter } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-encounters-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './encounters-table.component.html',
  styleUrl: './encounters-table.component.scss',
})
export class EncountersTableComponent {
  @Input() encounters: Encounter[] = [];
}
