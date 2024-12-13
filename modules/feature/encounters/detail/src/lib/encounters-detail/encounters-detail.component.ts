import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Amigo,
  Encounter,
  EncountersSearchService,
  FriendSearchService,
} from '@lista-espera-agenda/friend-data-access';
import { getParams } from '@lista-espera-agenda/friend-detail';
import { Observable, switchMap } from 'rxjs';
import { FormEditionMeetingComponent } from '../form-edition-meeting/form-edition-meeting.component';

@Component({
  selector: 'lib-encounters-detail',
  imports: [CommonModule],
  templateUrl: './encounters-detail.component.html',
  styleUrl: './encounters-detail.component.scss',
})
export class EncountersDetailComponent {
  private friendSearchService = inject(FriendSearchService);
  private encountersSearchService = inject(EncountersSearchService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

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

  openDialog(encounter: Encounter) {
    const dialogRef = this.dialog.open(FormEditionMeetingComponent, {
      data: encounter,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.id) {
        this.encountersSearchService.put(result).subscribe({
          next: (res) => {
            // português
            this.snackBar.open('Encontro atualizado', 'Fechar');
            if (res) {
              this.encounter$ = this.encountersSearchService.getById(result.id);
            }
          },
        });
      } else {
        this.snackBar.open('Ops, houve um erro', 'Fechar');
      }
    });
  }
}
