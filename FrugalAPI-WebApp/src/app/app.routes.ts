import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ApiTokensComponent } from './features/apiTokens/apiTokens.component';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard] // Ensure this guard is imported and provided in your module
    },
    {
        path: 'api-token',
        component: ApiTokensComponent,
        canActivate: [AuthGuard] // Ensure this guard is imported and provided in your module
    }
];
