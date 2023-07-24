import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { DataState } from 'src/app/shared/states/data.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  allRestoState !: DataState<any>;

  ngOnInit(): void {
    this.allRestoState = this.homeService.allRestoState;
  }
  getAll() {
    this.homeService.getAllResto();
  }
}
