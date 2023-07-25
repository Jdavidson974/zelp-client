import { Component, OnInit } from '@angular/core';
import { faDoorClosed, faDoorOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataState } from 'src/app/shared/states/data.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) { }
  isCollapsed = false;
  iconSearch = faSearch;
  connected: boolean = false;
  profilState!: DataState<any>;
  profil$!: Observable<any>;
  iconDoor = faDoorOpen

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    this.profilState = this.authService.profilState;
    this.profil$ = this.profilState.value$;
    if (token) {
      this.connected = true;
      this.authService.getProfilByNav();
    }

  }
  collapse() {
    this.isCollapsed = !this.isCollapsed
  }
  logout() {
    this.connected = false;
    localStorage.clear();
  }

}
