import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";

@Component({
  selector: 'app-customer-buying',
  templateUrl: './customer-buying.component.html',
  styleUrls: ['./customer-buying.component.scss']
})
export class CustomerBuyingComponent implements OnInit {


  lastWeekTrendData: Array<any>;
  componentTitle: string;
  barSparklineData: any;
  fullStackedBarData: any;
  lineChartCustomerBuyingData: any;

  constructor(private dashboardService: DashboardService) {
    this.lastWeekTrendData = dashboardService.getLastWeek();
    this.barSparklineData = this.dashboardService.barSparklineDb().spark.barSparkline;
    this.fullStackedBarData = this.dashboardService.getFullStackBarData();
    this.lineChartCustomerBuyingData = this.dashboardService.getLineChartBuyingData();

  }

  ngOnInit() {
    this.componentTitle = 'HOW OFTEN ARE YOUR CUSTOMERS BUYING?';
  }

}
