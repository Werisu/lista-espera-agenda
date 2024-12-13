import { Pipe, PipeTransform } from '@angular/core';
import { Amigo } from '@lista-espera-agenda/friend-data-access';

@Pipe({
  name: 'orderByMeetings',
})
export class OrderByMeetingsPipe implements PipeTransform {
  transform(items: Amigo[]): Amigo[] {
    if (!items) {
      return items;
    }

    return items.sort((a, b) => {
      const valueA = a['encounters'].length || 0;
      const valueB = b['encounters'].length || 0;

      return valueB - valueA;
    });
  }
}
