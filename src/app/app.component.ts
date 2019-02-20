import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { SideNavService } from './services/side-nav/side-nav.service';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-architecture';
  @ViewChild('sidenav') sidenav;
  sideNavSub;

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  customerRoutes: ROUTE[] = [
    {
      icon: 'people',
      route: '/heroes',
      title: 'Heroes',
    }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sideNavService: SideNavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    console.log(this.sidenav);
    this.sideNavSub = this.sideNavService.openNav$.subscribe(() => this.sidenav.open());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.sideNavSub.unsubscribe();
  }
}
