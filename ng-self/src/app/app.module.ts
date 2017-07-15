import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartistJsComponent } from "./pages/charts/components/chartistJs/chartist-js/chartist-js.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CalendarComponent } from "./pages/dashboard/calendar/calendar.component";

import { AppRoutingModule } from './app.routing';
import { RouterModule } from "@angular/router";
import { routing } from "./pages/dashboard/dashboard.routing";
import { PieChartComponent } from "./pages/dashboard/pie-chart/pie-chart.component";
import { BaCardComponent } from "./theme/components/ba-card/ba-card.component";
import { TrafficChartComponent } from "./pages/dashboard/traffic-chart/traffic-chart.component";
import { TranslateService } from '@ngx-translate/core';
import { TrafficChartService } from "./pages/dashboard/traffic-chart/traffic-chart.service";
import { BaThemeConfigProvider } from "./theme/theme.configProvider";
import { AppTranslationModule } from "./app.translation.module";

@NgModule({
  declarations: [
    AppComponent,
    ChartistJsComponent,
    DashboardComponent,
    CalendarComponent,
    PieChartComponent,
    BaCardComponent,
    TrafficChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    AppRoutingModule,
    AppTranslationModule
  ],
  providers: [TrafficChartService,
              BaThemeConfigProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
