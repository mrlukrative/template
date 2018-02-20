import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dx-charts',
  templateUrl: './dx-charts.component.html',
  styleUrls: ['./dx-charts.component.scss']
})
export class DxChartsComponent {
  @Input() trendData: any;
  @Input() width: number;
  @Input() height: number;
  @Input() seriesColorFirst: string;
  @Input() seriesColorSecond: string;
  @Input() legendVisible: boolean;
  @Input() formatType: string;
  @Input() seriesType: string;

  constructor() { }

}
