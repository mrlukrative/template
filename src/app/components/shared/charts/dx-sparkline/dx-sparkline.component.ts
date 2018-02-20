import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dx-sparkline',
  templateUrl: './dx-sparkline.component.html',
  styleUrls: ['./dx-sparkline.component.scss']
})
export class DxSparklineComponent {

  @Input() dataSource: any;
  @Input() valueField: string;
  @Input() barPositiveColor: string;
  @Input() firstLastColor: string;
  @Input() type: string;

  constructor() {
  }

}
