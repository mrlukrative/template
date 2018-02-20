import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/index.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Your Business Digest';
  enableComponent: boolean;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      // TODO: nice to have loaders on page navigation
      // if (event instanceof NavigationStart) {
      //   // Show loading indicator
      // }

      if (event instanceof NavigationEnd) {
        this.enableComponent = event.url === '/login' ? false : true
      }

      // if (event instanceof NavigationError) {
      //   // Hide loading indicator
      //
      //   // Present error to user
      //   console.log(event.error);
      // }
    });
  }

  ngOnInit() {
  }
}
