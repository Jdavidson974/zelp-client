import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataState } from 'src/app/shared/states/data.state';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiService {
  allRestoState: DataState<any> = new DataState<any>(null)
  getAllResto() {
    this.get('restaurant', this.allRestoState).subscribe();
  }
}
