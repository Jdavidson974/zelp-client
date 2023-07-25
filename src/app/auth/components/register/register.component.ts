import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataState } from 'src/app/shared/states/data.state';
import { Observable, takeWhile, tap } from 'rxjs';
import { VilleService } from 'src/app/shared/services/ville.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private villeService: VilleService) { }
  formRegister !: FormGroup;
  registerState!: DataState<any>;
  villeState!: DataState<any>;
  villes$!: Observable<any>
  ngOnInit(): void {
    this.villeState = this.villeService.allVilleState;
    this.villes$ = this.villeState.value$
    this.registerState = this.authService.registerState;
    this.formRegister = this.formBuilder.group({
      lastname: this.formBuilder.control('', [Validators.required]),
      firstname: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      role: this.formBuilder.control('client', [Validators.required]),
      ville: this.formBuilder.control('', Validators.required),
    })

  }

  submit() {
    if (this.formRegister.valid) {
      this.authService.register(this.formRegister.value);
    }
  }
}
