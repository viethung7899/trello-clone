import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { BoardService } from 'src/app/boards/board.service';
import { Task } from 'src/app/boards/board.model';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['../dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private boardService: BoardService,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAdd() {
    this.boardService.addTask(this.data.board, this.data.task);
    this.dialogRef.close();
  }

  onUpdate() {
    const tasks = this.data.board.tasks;
    tasks[this.data.taskId] = { ...this.data.task };
    this.boardService.updateTasks(this.data.board, tasks);
    this.dialogRef.close();
  }

  onDeletion() {
    const confirmDialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: {
        type: 'task',
        name: this.data.task.description,
      },
    });

    confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.boardService.deleteTask(this.data.board, this.data.taskId);
        this.dialogRef.close();
      }
    });
  }

  isEmptyDescription() {
    return this.data.task.description.trim().length === 0;
  }
}
