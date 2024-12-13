import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Encounter } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-encounters-table',
  imports: [CommonModule],
  templateUrl: './encounters-table.component.html',
  styleUrl: './encounters-table.component.scss',
})
export class EncountersTableComponent {
  @Input() encounters: Encounter[] = [];

  openDialog(row: any) {
    // open dialog
  }
}
