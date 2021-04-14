import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidNavService } from '../services/sid-nav.service'

@Component({
  selector: 'app-sid-nav',
  templateUrl: './sid-nav.component.html',
  styleUrls: ['./sid-nav.component.scss']
})
export class SidNavComponent implements OnInit {

  showSideNav!: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration!: number;
  @Input() navWidth!: number;
  /* @Input() direction: SideNavDirection = SideNavDirection.Left; */

  constructor(private navService: SidNavService) { }

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose(){
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = 'left ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    
    return navBarStyle;
  }
}