import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open('You must be logged in!', 'OK', {
      duration: 5000
    });

    this.router.navigate(['/login']);
  }

  logInError() {
    this.snackBar.open('Invalid email or password', 'OK', {
      duration: 5000,
    });
    return this.snackBar._openedSnackBarRef.onAction().subscribe();
  }

  sucessful(path: string) {
    this.router.navigate([path]);
    this.snackBar.open('Sucessful', 'OK', {
      duration: 5000,
    });
  }

  error(error) {
    this.snackBar.open(error, 'OK', {
      duration: 5000,
    });
  }
}
