import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VilleService } from '../services/ville.service';

@Injectable({
  providedIn: 'root'
})
export class GetVilleResolver implements Resolve<void> {
  constructor(private villeServices: VilleService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.villeServices.getAllVille();
  }
}
