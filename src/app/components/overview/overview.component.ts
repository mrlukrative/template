import { ApplicationState } from '../../store/reducers/_reducers';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimelineService } from '../../services/timeline.service';

import { DashboardService, Population } from '../../services/dashboard.service';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions/actions';
import { Observable } from 'rxjs/Observable';
import { MessagesState } from '../../store/reducers/messages-reducer';
import { MetricsState } from '../../store/reducers/metrics-reducer';
import { messagesSelector } from '../../store/selectors/messages-selector';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class OverviewComponent implements OnInit {
  timelines: any;
  populationData: Array<Population>;

  messages$: Observable<MessagesState>;
  metrics$: Observable<MetricsState>;

  constructor(private store: Store<ApplicationState>,
              private timelineService: TimelineService,
              private dashboardService: DashboardService) {

    this.populationData = dashboardService.getPopulationData();

    this.messages$ = this.store.select(messagesSelector);
    this.metrics$ = this.store.select('metrics');
  }

  ngOnInit(): void {
    this.timelines = this.timelineService.timelineDb().sales.breakdown;
    this.store.dispatch(new actions.FetchMessagesRequest());
  }
}
