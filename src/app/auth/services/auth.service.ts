import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginData } from '../models/login-data.model';
import { DataState } from 'src/app/shared/states/data.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  loginState: DataState<any> = new DataState<any>(null);
  login(data: LoginData) {
    this.post("auth/login", this.loginState, data).subscribe();
  }
}
