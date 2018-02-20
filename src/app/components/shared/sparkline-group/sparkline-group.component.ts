import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sparkline',
  templateUrl: './sparkline-group.component.html',
  styleUrls: ['./sparkline-group.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SparklineGroupComponent implements OnInit {
  // TODO: Write documention using reference to github + dx docs

  @Input() title: string;
  @Input() barSparklineData: any;
  @Input() totalCustomers: number;
  @Input() valueField: string;
  @Input() period: string;
  @Input() becameRepeat: number;
  @Input() reactivated: number;
  @Input() barPositiveColor: string;
  @Input() firstLastColor: string;
  @Input() seriesType: string;

  constructor() {
  }

  ngOnInit() {
  }
}
