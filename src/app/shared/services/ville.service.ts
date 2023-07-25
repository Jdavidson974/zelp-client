import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataState } from '../states/data.state';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService extends ApiService {

  allVilleState: DataState<any> = new DataState<any>(null);
  getAllVille() {
    this.get('ville', this.allVilleState).pipe(tap(a => console.log(a)
    )).subscribe();
  }
}
