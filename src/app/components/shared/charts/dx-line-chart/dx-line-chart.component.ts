import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dx-line-chart',
  templateUrl: './dx-line-chart.component.html',
  styleUrls: ['./dx-line-chart.component.scss']
})
export class DxLineChartComponent implements OnInit {

  @Input() dataSource: any;
  @Input() type: string;
  @Input() seriesColorYou: string;
  @Input() seriesColorCompetitors: string;
  @Input() seriesColorYear: string;

  constructor() {}

  ngOnInit() {
  }

  customizeTooltip(arg: any) {
    return {
      color: '#585858',
      fontColor: '#fff',
      borderColor: '#000'
    };
  }

  legendClick(e: any) {
    const series = e.target;
    if (series.isVisible()) {
      series.hide();
    } else {
      series.show();
    }
  }
}
