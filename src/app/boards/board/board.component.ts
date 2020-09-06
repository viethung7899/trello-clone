import { Component, OnInit, Input } from '@angular/core';
import { Board, Task } from '../board.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../../dialogs/task-dialog/task-dialog.component';
import { DeleteConfirmDialogComponent } from '../../dialogs/delete-confirm-dialog.component';
import { BoardService } from '../board.service';
import { BoardDialogComponent } from 'src/app/dialogs/board-dialog/board-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: Board;

  constructor(private dialog: MatDialog, private boardSerive: BoardService) {}

  ngOnInit(): void {}

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardSerive.updateTasks(this.board, this.board.tasks);
  }

  openTaskDialog(task?: Task, taskId?: number) {
    const newTask: Task = { color: 'purple', description: '' };
    this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? {
            board: this.board,
            task: { ...task },
            editMode: false,
            taskId,
          }
        : {
            board: this.board,
            task: newTask,
            editMode: true,
          },
    });
  }

  // Confirm dialofg for deletion
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '300px',
      data: {
        type: 'board',
        name: this.board.title,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.boardSerive.deleteBoard(this.board);
      }
    });
  }

  // Open board dialog to rename
  openBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '300px',
      data: {
        isNew: false,
        board: this.board,
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      
    })
  }
}
