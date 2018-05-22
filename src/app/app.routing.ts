import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { DemoComponent } from './demo/demo.component';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
    { path: '', component: DemoComponent },
    { path: 'message', component: MessageComponent },
    { path: 'demo', component: DemoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
