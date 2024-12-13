import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<any>('Application config');
export const environment = {
  apiUrl: 'https://6759e30b099e3090dbe339e5.mockapi.io',
  production: true,
};
