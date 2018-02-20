import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MessagesState } from '../../../store/reducers/messages-reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TimelineComponent {
  @Input() messages$: Observable<MessagesState>;
  @Input() dashboardMetricsData: any;
}
