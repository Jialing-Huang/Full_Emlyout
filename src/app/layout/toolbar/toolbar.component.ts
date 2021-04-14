import { Component, OnInit } from '@angular/core';
import { SidNavService } from '../services/sid-nav.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private navService: SidNavService) { }

  ngOnInit(): void {
  }
 
  toggleSideNav() {
    this.navService.setShowNav(true);
  }

}
