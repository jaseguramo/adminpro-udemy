import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared,module';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Principal Component
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        GraficoDonaComponent,
        IncrementadorComponent,
        ProgressComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        ChartsModule,
        FormsModule,
        PAGES_ROUTES,
        SharedModule
    ]
})
export class PagesModule { }
