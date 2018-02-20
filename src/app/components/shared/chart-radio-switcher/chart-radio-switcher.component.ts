import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chart-radio-switcher',
  templateUrl: './chart-radio-switcher.component.html',
  styleUrls: ['./chart-radio-switcher.component.scss']
})
export class ChartRadioSwitcherComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

  amountTypeSelection: string;

  amountType = [
    'Percent',
    'Currency'
  ]

  constructor() {
  }

  ngOnInit() {
    this.amountTypeSelection = this.amountType[0];
  }

  onChange(amount) {
    this.change.emit(amount);
  }
}
