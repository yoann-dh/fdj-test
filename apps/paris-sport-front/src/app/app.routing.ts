import { Route } from '@angular/router';

export const appRouting: Route[] = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
];
