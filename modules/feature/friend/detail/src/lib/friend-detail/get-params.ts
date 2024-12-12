import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
export function getParams(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}
