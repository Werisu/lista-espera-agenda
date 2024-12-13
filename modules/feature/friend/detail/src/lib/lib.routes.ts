import { Route } from '@angular/router';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';

export const friendDetailRoutes: Route[] = [
  {
    path: ':id',
    component: FriendDetailComponent,
  },
];
