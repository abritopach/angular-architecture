import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { SideNavService } from './services/side-nav/side-nav.service';

import { AuthenticationService } from './services/core/authentication/authentication.service';

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sideNavService: SideNavService,
              private authenticationService: AuthenticationService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        console.log(state);
        setTimeout(() => {
          this.router.navigate(['heroes']);
        }, 2000);

      } else {
        this.router.navigate(['login']);
      }
    });
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
