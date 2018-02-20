import {Component} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {DashboardService} from '../../../../services/dashboard.service';

@Component({
  selector: 'app-aquisition-rentention',
  templateUrl: './aquisition-rentention.component.html',
  styleUrls: ['./aquisition-rentention.component.scss']
})


export class AquisitionRententionComponent {

  barSparklineData: any; // Temp
  populationData: any; // Temp
  weeklyTrendData: any; // Temp

  componentTitle: string;

  constructor(private dashboardService: DashboardService) {
    // this is all mock data and should be deleted once actually service is available to provide data
    this.barSparklineData = this.dashboardService.barSparklineDb().spark.barSparkline;
    this.populationData = dashboardService.getPopulationData();
    this.componentTitle = 'Aquisition & Rentention';
    this.weeklyTrendData = this.dashboardService.getWeeklyTrendData();
  }
}
