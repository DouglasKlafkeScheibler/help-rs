import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { WannaDonateComponent } from './modules/pages/wanna-donate/wanna-donate.component';
import { WannaVolunteerComponent } from './modules/pages/wanna-volunteer/wanna-volunteer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'doar',
        component: WannaDonateComponent
    },
    {
        path: 'voluntario',
        component: WannaVolunteerComponent
    },
];
