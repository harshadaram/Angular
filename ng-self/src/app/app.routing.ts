import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
    {path: '**', component: DashboardComponent}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}