import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss']
})
export class LayoutDashboardComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    const url = this.router.url
    if (url == "/dashboard") {
      this.router.navigateByUrl("/");
    }
  }
}
