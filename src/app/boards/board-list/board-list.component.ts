import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../dialogs/board-dialog/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  boards: Board[] = [];

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBoards();
  }

  loadBoards() {
    this.boardService.getBoards().subscribe((boards) => (this.boards = boards));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  // Open dialog to create new board
  openBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '300px',
      data: {
        isNew: true,
        board: {
          title: '',
          priority: this.boards.length,
        },
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.boardService.createBoard(data);
      }
    });
  }
}
