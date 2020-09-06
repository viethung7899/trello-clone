import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../board.service';
import { Board } from '../board.model';

@Component({
  selector: 'app-delete-confirm-component',
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <div mat-dialog-content>
      <p>
        Do you want to delete the <strong>{{ data.name }}</strong>
        {{ data.type }}?
      </p>
    </div>
    <div mat-dialog-action>
      <button mat-button [mat-dialog-close]="false">CANCEL</button>
      <button mat-button color="warn" cdkFocusInitial [mat-dialog-close]="true">
        DELETE ANYWAY
      </button>
    </div>
  `,
  styleUrls: [],
})
export class DeleteConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  ngOnInit(): void {}
}
