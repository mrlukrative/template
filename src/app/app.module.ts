import { environment } from '../environments/environment';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DxChartModule, DxSparklineModule } from 'devextreme-angular';
import { MdButtonModule, MdDialogModule, MdRadioModule, MdTabsModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Components
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SegmentsComponent } from './components/shared/tabs/segments/segments.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { InsightComponent } from './components/shared/insight/insight.component';
import { MarketingViewComponent } from './components/shared/modal/marketing-view/marketing-view.component';
import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/shared/timeline/timeline.component';
import { SparklineGroupComponent } from './components/shared/sparkline-group/sparkline-group.component';
import { DxSparklineComponent } from './components/shared/charts/dx-sparkline/dx-sparkline.component';
import { DxChartsComponent } from './components/shared/charts/dx-charts/dx-charts.component';
import { AquisitionRententionComponent } from './components/shared/tabs/aquisition-rentention/aquisition-rentention.component';
import { RevenuesSourceComponent } from './components/shared/tabs/revenues-source/revenues-source.component';
import { CustomersSpendComponent } from './components/shared/tabs/customers-spend/customers-spend.component';
import { DxSideBySideChartComponent } from './components/shared/charts/dx-side-by-side-chart/dx-side-by-side-bar-chart.component';
// Services
import { DashboardService } from './services/dashboard.service';
import { TimelineService } from './services/timeline.service';
import { AuthenticationService } from './services/authentication.service';
import { MessagesService } from './services/messages.service';
import { ApiService } from './services/api.service';
import { MetricsService } from './services/metrics.service';
// reducers & effects
import { effects } from './store/effects/_effects';
import { initialState, reducers } from './store/reducers/_reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './guards/auth.guard';
import { MessageComponent } from './components/shared/message/message.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DxFullstackedBarComponent } from './components/shared/charts/dx-fullstacked-bar/dx-fullstacked-bar.component';
import { FullstackedBarGroupComponent } from './components/shared/fullstacked-bar-group/fullstacked-bar-group.component';
import { ChartRadioSwitcherComponent } from './components/shared/chart-radio-switcher/chart-radio-switcher.component';
import { CustomerBuyingComponent } from './components/shared/tabs/customer-buying/customer-buying.component';
import { ShareWalletComponent } from './components/shared/tabs/share-wallet/share-wallet.component';
import { DxLineChartComponent } from './components/shared/charts/dx-line-chart/dx-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OverviewComponent,
    DashboardComponent,
    SegmentsComponent,
    InsightComponent,
    MarketingViewComponent,
    LoginComponent,
    TimelineComponent,
    AquisitionRententionComponent,
    SparklineGroupComponent,
    MessageComponent,
    RevenuesSourceComponent,
    CustomersSpendComponent,
    DxSideBySideChartComponent,
    DxSparklineComponent,
    DxChartsComponent,
    DxFullstackedBarComponent,
    FullstackedBarGroupComponent,
    ChartRadioSwitcherComponent,
    CustomerBuyingComponent,
    ShareWalletComponent,
    DxLineChartComponent

  ],
  entryComponents: [
    MarketingViewComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdTabsModule,
    AngularSvgIconModule,
    DxSparklineModule,
    DxChartModule,
    MdRadioModule,
    RouterModule.forRoot([
      { path: '', component: OverviewComponent },
      { path: ':id/overview', component: OverviewComponent },
      { path: ':overview/:id', component: OverviewComponent },
      { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
      { path: ':id/dashboard', component: DashboardComponent },
      { path: ':dashboard/:id', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent }
    ]),
    StoreModule.forRoot(reducers, { initialState }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot(effects),
  ],
  providers: [TimelineService, DashboardService, AuthenticationService, MessagesService, MetricsService, ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
