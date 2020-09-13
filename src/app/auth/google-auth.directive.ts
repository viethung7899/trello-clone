import { Directive, HostListener } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleAuth]',
})
export class GoogleAuthDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click') onClick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
