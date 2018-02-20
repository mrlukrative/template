import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dx-fullstacked-bar',
  templateUrl: './dx-fullstacked-bar.component.html',
  styleUrls: ['./dx-fullstacked-bar.component.scss']
})
export class DxFullstackedBarComponent implements OnInit {

  @Input() dataSource: any;
  @Input() dxFormat: string;
  @Input() type: string;
  @Input() seriesColorFirstTime: string;
  @Input() seriesColorRepeat: string;

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



}
