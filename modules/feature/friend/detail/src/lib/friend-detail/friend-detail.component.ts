import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Amigo,
  FriendSearchService,
} from '@lista-espera-agenda/friend-data-access';
import { Observable, switchMap } from 'rxjs';
import { FriendEditComponent } from './dialog/friend-edit/friend-edit.component';
import { getParams } from './get-params';

@Component({
  selector: 'lib-friend-detail',
  imports: [CommonModule],
  templateUrl: './friend-detail.component.html',
  styleUrl: './friend-detail.component.scss',
})
export class FriendDetailComponent {
  private friendSearchService = inject(FriendSearchService);
  readonly dialog = inject(MatDialog);

  friend$: Observable<Amigo> = getParams().pipe(
    switchMap((id) => this.friendSearchService.getById(id))
  );

  openDialog(friend: Amigo) {
    const dialogRef = this.dialog.open(FriendEditComponent);
    dialogRef.componentInstance.friend = friend;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.friendSearchService.put(result).subscribe({
          next: (res) => {
            if (res) {
              this.friend$ = this.friendSearchService.getById(result.id);
            }
          },
        });
      }
    });
  }
}
