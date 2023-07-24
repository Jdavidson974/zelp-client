import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataState } from 'src/app/shared/states/data.state';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiService {
  allRestoState: DataState<Restaurant[]> = new DataState<Restaurant[]>(null)
  getAllResto() {
    this.get('restaurant', this.allRestoState).subscribe();
  }
}
