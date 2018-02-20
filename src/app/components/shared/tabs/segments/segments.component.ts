import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})

export class SegmentsComponent implements OnInit{
  @ViewChild('overallChart') overallChart: DxChartComponent;
  @ViewChild('montlyTrendChart') montlyTrendChart: DxChartComponent;
  @Input() dxFormat: any;

  // dxFormat: any;

  overall: any;
  overallData = [{
    segments: 'Customers',
    first: 12663,
    repeat: 28943,
    risk: 11853,
    dormant: 14413
  }];

  montlyTrend: any;
  montlyTrendData = [{
    country: 'Oct',
    first: 853191410,
    repeat: 320866959,
    risk: 87774113,
    dormant: 87774113,
  }, {
    country: 'Nov',
    first: 626520945,
    repeat: 340419115,
    risk: 47063757,
    dormant: 87774113,
  }, {
    country: 'Dec',
    first: 182172625,
    repeat: 58554755,
    risk: 34835293,
    dormant: 87774113,
  }, {
    country: 'Jan 2017',
    first: 146014815,
    repeat: 68715705,
    risk: 10053690,
    dormant: 87774113,
  }, {
    country: 'Feb',
    first: 113391494,
    repeat: 50278034,
    risk: 9190842,
    dormant: 87774113,
  }, {
    country: 'Mar',
    first: 101123777,
    repeat: 26465156,
    risk: 18412243,
    dormant: 87774113,
  }];

  constructor() {}

  ngOnInit(){

    this.dxFormat = 'percent';

    this.overall = {
      dataSource: this.overallData,
      size: { height: 200 },
      legend: {
        verticalAlignment: 'bottom',
        horizontalAlignment: 'center'
      },
      series: [
        { valueField: 'first', name: 'First-Time', color: '#54D76B', hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'repeat', name: 'Repeat', color: '#2A666C', hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'risk', name: 'At Risk', color: '#F1A428', hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'dormant', name: 'Dormant', color: '#CD0B24', hoverStyle: {hatching: {direction: 'none'}}}
      ],
      commonSeriesSettings: {
        argumentField: 'segments',
        type: 'fullStackedBar',
        label: {
          visible: true,
          format: 'fixedPoint',
          customizeText: this.customizeText
        }
      },
      commonAxisSettings: {
        grid: { visible: false },
        label: { visible: false }
      },
    };

    this.montlyTrend = {
      dataSource: this.montlyTrendData,
      adaptiveLayout: { width: 80 },
      size: { height: 300 },
      legend: {
        verticalAlignment: 'bottom',
        horizontalAlignment: 'center'
      },
      series: [
        { valueField: 'first', name: 'First-Time', color: '#54D76B', opacity: 1, hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'repeat', name: 'Repeat', color: '#2A666C', opacity: 1, hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'risk', name: 'At Risk', color: '#F1A428', opacity: 1, hoverStyle: {hatching: {direction: 'none'}}},
        { valueField: 'dormant', name: 'Dormant', color: '#CD0B24', opacity: 1, hoverStyle: {hatching: {direction: 'none'}}}
      ],
      commonSeriesSettings: {
        argumentField: 'country',
        type: 'fullstackedarea'
      },
      argumentAxis: {
        valueMarginsEnabled: false,
      },
      tooltip: {
        shared: true,
        enabled: true,
        zIndex: 99999,
        customizeTooltip: this.customizeTooltip
      }
    };
  }

  // force a chart rerender when changing tabs
  onSelectChange({ index }) {
    index === 0
      ? this.overallChart.instance.render()
      : this.montlyTrendChart.instance.render();
  }

  customizeTooltip() {
    return {
      color: '#585858',
      fontColor: '#fff',
      borderColor: '#000'
    };
  }

  handleChangeUpdated(formatType) {
    this.dxFormat = formatType;
  }

  customizeText(args: any) {
    return `
      <div class='dxc-label'>
        <strong>${args.seriesName}</strong>
        <br><span>${args.valueText} (${Math.round(args.percent * 100)}%)</span>
      </div>
    `;
  }
}
