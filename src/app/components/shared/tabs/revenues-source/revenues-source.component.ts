import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-revenues-source',
  templateUrl: './revenues-source.component.html',
  styleUrls: ['./revenues-source.component.scss']
})
export class RevenuesSourceComponent implements OnInit {

  lastWeekTrendData: Array<any>;
  componentTitle: string;
  barSparklineData: any;
  populate: any;
  fullStackedBarData: any;

  constructor(private dashboardService: DashboardService) {
    this.lastWeekTrendData = dashboardService.getLastWeek();
    this.barSparklineData = this.dashboardService.barSparklineDb().spark.barSparkline;
    this.populate = this.dashboardService.getPopulationData();
    this.fullStackedBarData = this.dashboardService.getFullStackBarData();
  }

  ngOnInit() {
    this.componentTitle = 'WHERE DO YOUR REVENUES COME FROM?';
  }

}
