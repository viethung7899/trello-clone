import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent implements OnInit {
  isLoginMode = true;
  loading = false;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private snack: SnackService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      passwordConfirm: ['', []],
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordMatched() {
    return this.password.value === this.passwordConfirm.value;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      if (this.isLoginMode) {
        await this.afAuth.signInWithEmailAndPassword(email, password);
      } else {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
      }
      this.snack.sucessful('/boards');
    } catch (error) {
      this.form.reset();
      this.snack.logInError();
    }

    this.loading = false;
  }
}
