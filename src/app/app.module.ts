import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ShellComponent } from './shared/shell/shell.component';
import { BoardListComponent } from './boards/board-list/board-list.component';
import { BoardComponent } from './boards/board/board.component';
import { LogInFormComponent } from './auth/log-in-form/log-in-form.component';
import { LogInPageComponent } from './auth/log-in-page/log-in-page.component';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { DeleteConfirmDialogComponent } from './dialogs/delete-confirm-dialog.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BoardListComponent,
    BoardComponent,
    LogInFormComponent,
    LogInPageComponent,
    BoardDialogComponent,
    TaskDialogComponent,
    DeleteConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
