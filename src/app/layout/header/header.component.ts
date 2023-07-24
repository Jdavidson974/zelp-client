import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  isCollapsed = false;
  iconSearch = faSearch;
  collapse() {
    this.isCollapsed = !this.isCollapsed
  }
}
