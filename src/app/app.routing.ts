import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'message', component: MessageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);