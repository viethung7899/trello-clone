import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {
  isLoginMode = true;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
}
