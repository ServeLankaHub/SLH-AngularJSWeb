import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faBell = faBell;
  faMessage = faMessage;
  faGlobe = faGlobe;
  faSearch = faSearch;
  faAngleDown=faAngleDown;
  faAlignLeft =faAlignLeft;

  isSidebarVisible:boolean = true; // Initially, the sidebar is visible
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  
}
