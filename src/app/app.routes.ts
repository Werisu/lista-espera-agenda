import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@lista-espera-agenda/home').then((r) => r.homeRoutes),
  },
  {
    path: 'friend',
    loadChildren: () =>
      import('@lista-espera-agenda/friend-detail').then(
        (r) => r.friendDetailRoutes
      ),
  },
  {
    path: 'encounters',
    loadChildren: () =>
      import('@lista-espera-agenda/encounters-detail').then(
        (r) => r.encountersDetailRoutes
      ),
  },
];
