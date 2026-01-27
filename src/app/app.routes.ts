import { Routes } from '@angular/router';
import { AppShellLayoutComponent } from './core/layout/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellLayoutComponent,
    children: [
      {
        path: '',
        title: 'ASMCO Tech | Affordable Websites for Retail & Factories',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePageComponent)
      },
      {
        path: 'services',
        title: 'Services | ASMCO Tech',
        loadComponent: () =>
          import('./pages/services/services.page').then(
            (m) => m.ServicesPageComponent
          )
      },
      {
        path: 'packages',
        title: 'Packages | ASMCO Tech',
        loadComponent: () =>
          import('./pages/packages/packages.page').then(
            (m) => m.PackagesPageComponent
          )
      },
      {
        path: 'work',
        title: 'Work | ASMCO Tech',
        loadComponent: () =>
          import('./pages/work/work.page').then((m) => m.WorkPageComponent)
      },
      {
        path: 'about',
        title: 'About | ASMCO Tech',
        loadComponent: () =>
          import('./pages/about/about.page').then((m) => m.AboutPageComponent)
      },
      {
        path: 'contact',
        title: 'Contact | ASMCO Tech',
        loadComponent: () =>
          import('./pages/contact/contact.page').then(
            (m) => m.ContactPageComponent
          )
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
