import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-marketing-view',
  templateUrl: './marketing-view.component.html',
  styleUrls: ['./marketing-view.component.scss'],
})
export class MarketingViewComponent implements OnInit {

  url: any;

  constructor(@Inject(MD_DIALOG_DATA) private data: any, private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data)
  }

}
