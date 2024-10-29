import { AuthService } from './../../auth/auth.service';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isPasswordVisible = signal<boolean>(false);

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;

      // Null yoki undefined qiymatlarni tekshirish va default qiymat berish
      const username = formValue.username ?? '';
      const password = formValue.password ?? '';

      this.authService.login({ username, password }).subscribe((res) => {
        this.router.navigate(['']);
        console.log(res);
      });

      console.debug({ username, password }); // Tekshirilgan va moslashtirilgan qiymatlar
    }
  }
}
