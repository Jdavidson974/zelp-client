import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginData } from '../models/login-data.model';
import { DataState } from 'src/app/shared/states/data.state';
import { tap } from 'rxjs';
import { GetToken } from '../models/token.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  loginState: DataState<GetToken> = new DataState<GetToken>(null);
  registerState: DataState<GetToken> = new DataState<GetToken>(null);
  profilState: DataState<any> = new DataState<any>(null);
  login(data: LoginData) {
    this.post<GetToken>("auth/login", this.loginState, data).pipe(
      tap(
        token => {
          if (token.access_token) {
            localStorage.setItem('token', token.access_token);
          }
        }
      )
    ).subscribe();
  }
  register(value: Register) {
    this.post<GetToken>('auth/register', this.registerState, value).pipe(
      tap(
        token => {
          if (token.access_token) {
            localStorage.setItem('token', token.access_token);
            this.router.navigateByUrl("/");
          } else {
            alert('error');
          }
        }
      )
    ).subscribe()
  }
  getProfilByNav() {
    this.get('auth/profile', this.profilState).subscribe();
  }
  getProfilByResolver() {
    this.get('auth/profile', this.profilState)
  }
}
