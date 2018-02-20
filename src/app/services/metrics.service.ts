import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { handleGetMetricsResponse } from '../helpers/helpers';

@Injectable()
export class MetricsService {

  constructor(private api: ApiService) { }

  getMetrics(dashboardView): Observable<any> {
    return this.api.post('/dashboard/views', dashboardView)
      .map(handleGetMetricsResponse);
  }
}
