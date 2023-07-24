import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { HomeService } from '../services/home.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllRestoResolver implements Resolve<void> {
  constructor(private homeService: HomeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.homeService.getAllResto();
  }
}
