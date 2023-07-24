import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  isCollapsed = false;
  collapse() {
    this.isCollapsed = !this.isCollapsed
  }
}