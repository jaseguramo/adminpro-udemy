import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes del tema' } },
          { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
          { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas' } },
          { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
          { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' } },
          { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
