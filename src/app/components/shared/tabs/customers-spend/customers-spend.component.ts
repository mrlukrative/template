import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../../services/dashboard.service';

@Component({
  selector: 'app-customers-spend',
  templateUrl: './customers-spend.component.html',
  styleUrls: ['./customers-spend.component.scss']
})
export class CustomersSpendComponent implements OnInit {

  lastWeekTrendData: Array<any>;
  componentTitle: string;
  barSparklineData: any;
  fullStackedBarData: any;
  lineChartData: any;

  constructor(private dashboardService: DashboardService) {
    this.lastWeekTrendData = dashboardService.getLastWeek();
    this.barSparklineData = this.dashboardService.barSparklineDb().spark.barSparkline;
    this.fullStackedBarData = this.dashboardService.getFullStackBarData();
    this.lineChartData = this.dashboardService.getLineChartData();

  }

  ngOnInit() {
    this.componentTitle = 'HOW MUCH DID YOUR CUSTOMERS SPEND?';
  }
}
