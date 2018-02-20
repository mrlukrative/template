import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DashboardService, Population} from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  populationData: Population[];
  urlParams: any;

  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) {
    this.populationData = dashboardService.getPopulationData();
  }

  ngOnInit() {
    // Get parameter
    this.urlParams = this.activatedRoute.params.subscribe(params => {
      if (+params['id']) {
      }
    });
  }
}
