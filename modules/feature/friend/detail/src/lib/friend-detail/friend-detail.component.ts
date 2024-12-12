import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { getParams } from './get-params';

@Component({
  selector: 'lib-friend-detail',
  imports: [CommonModule],
  templateUrl: './friend-detail.component.html',
  styleUrl: './friend-detail.component.scss',
})
export class FriendDetailComponent {
  @Input() id!: string;
  id$: Observable<string> = getParams();
}
