import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { DeleteConfirmDialogComponent } from './dialogs/delete-confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardsRoutingModule } from './boards-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent,
    BoardListComponent,
    BoardDialogComponent,
    TaskDialogComponent,
    DeleteConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BoardsRoutingModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent],
})
export class BoardsModule {}
