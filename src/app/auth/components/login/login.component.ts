import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataState } from 'src/app/shared/states/data.state';
import { takeWhile, tap } from 'rxjs';
import { Router } from '@angular/router';
import { GetToken } from '../../models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  formLogin !: FormGroup;
  loginState!: DataState<GetToken>;
  ngOnInit(): void {
    this.loginState = this.authService.loginState;
    this.formLogin = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    })
  }

  submit() {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value)
      this.loginState.isLoading$.pipe(
        tap(
          loading => {
            if (!loading) {
              const token = localStorage.getItem('token')
              if (token) {
                this.router.navigateByUrl('/');
              } else {
                // TODO gerer le cas 
                alert("error")
              }
            }
          }
        ),
        takeWhile(loading => loading)
      ).subscribe()
    }
  }

}
