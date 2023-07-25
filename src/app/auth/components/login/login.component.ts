import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  formLogin !: FormGroup;
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    })
  }

  submit() {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value)
    }
  }

}
