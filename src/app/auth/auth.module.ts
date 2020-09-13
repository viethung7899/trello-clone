import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GoogleAuthDirective } from './google-auth.directive';

@NgModule({
  declarations: [LogInPageComponent, LogInFormComponent, GoogleAuthDirective],
  imports: [CommonModule, SharedModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [GoogleAuthDirective]
})
export class AuthModule {}
