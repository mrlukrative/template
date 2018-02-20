import { Component, Input } from '@angular/core';
import { MarketingViewComponent } from '../modal/marketing-view/marketing-view.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message;

  constructor(public dialog: MdDialog) {}

  openDialog(url) {
    this.dialog.open(MarketingViewComponent, {
      width: '878px',
      height: '414px',
      disableClose: true,
      data: url
    });
  }
}
