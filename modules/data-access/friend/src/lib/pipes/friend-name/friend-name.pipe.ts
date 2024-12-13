import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FriendSearchService } from '../../friend-search/friend-search.service';
import { Amigo } from '../../models/amigo.model';

@Pipe({
  name: 'friendName',
})
export class FriendNamePipe implements PipeTransform {
  constructor(private friendsService: FriendSearchService) {}

  transform(amigoId: string): Observable<Amigo> | null {
    const friend = this.friendsService.getById(amigoId); // Cache ou lógica eficiente
    return friend.pipe(map((friend) => friend)) as Observable<Amigo> | null;
  }
}
