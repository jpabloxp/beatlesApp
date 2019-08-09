import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isViewInitialized = false;
  navLinks = [];

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.navLinks = [
      {
        path: 'home',
        label: 'Home'
      },
      {
        path: 'album',
        label: 'Album'
      }
    ];
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

}
