import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dx-side-by-side-chart',
  templateUrl: './dx-side-by-side-bar-chart.component.html',
  styleUrls: ['./dx-side-by-side-bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class DxSideBySideChartComponent implements OnInit {
  @Input() trendData: any;

  width: number;
  height: number;
  selectedBar: any;

  constructor() {
  }

  ngOnInit() {
    this.width = 990;
    this.height = 310;
  }

  pointClick(e: any) {
    const point = e.target;
    point.showTooltip();
    this.selectedBar = point.argument;
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
