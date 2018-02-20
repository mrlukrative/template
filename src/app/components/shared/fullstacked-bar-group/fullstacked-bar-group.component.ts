import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fullstacked-bar-group',
  templateUrl: './fullstacked-bar-group.component.html',
  styleUrls: ['./fullstacked-bar-group.component.scss']
})
export class FullstackedBarGroupComponent{

  @Input() dataSource: any;
  @Input() type: any;
  @Input() seriesColorFirstTime: any;
  @Input() seriesColorRepeat: any;
  dxFormat: string;

  constructor() {
  }

  handleChangeUpdated(formatType) {
    this.dxFormat = formatType;
  }
}
