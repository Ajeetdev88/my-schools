import { Routes } from '@angular/router';
import { AdminLayout } from './common-page/admin-layout/admin-layout';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'academic',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'academic',
        loadChildren: () =>
          import('./components/academic/academic.routes')
            .then(m => m.ACADEMIC_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'academic'
  }
];
