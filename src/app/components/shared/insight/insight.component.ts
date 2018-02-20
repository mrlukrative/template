import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InsightComponent {
  @Input() message;
}
