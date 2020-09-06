import { Injectable } from '@angular/core';
import { Board, Task } from './board.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private fs: AngularFirestore, private afAuth: AngularFireAuth) {}

  getBoards(): Observable<Board[]> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.fs
            .collection<Board>('boards', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  async createBoard(board: Board) {
    const user = await this.afAuth.currentUser;
    return this.fs.collection('boards').add({
      ...board,
      uid: user.uid,
      tasks: [],
    });
  }

  // Sorting the board after swapping the priority
  sortBoards(boards: Board[]) {
    const database = firebase.firestore();
    const batch = database.batch();

    // Get the board reference of each board
    const refs = boards.map((board) => database.collection('boards').doc(board.id));

    // Modify the id of each board
    refs.forEach((ref, index) => batch.update(ref, { priority: index }));
    // Commit the changes
    batch.commit();
  }

  deleteBoard(board: Board) {
    return this.fs.collection('boards').doc(board.id).delete();
  }

  renameBoard(board: Board) {
    
  }

  updateTasks(board: Board, tasks: Task[]) {
    return this.fs.collection('boards').doc(board.id).update({ tasks });
  }

  addTask(board: Board, task: Task) {
    return this.fs
      .collection('boards')
      .doc(board.id)
      .update({
        tasks: firebase.firestore.FieldValue.arrayUnion(task),
      });
  }

  deleteTask(board: Board, taskId: number) {
    const task: Task = board.tasks[taskId];
    return this.fs
      .collection('boards')
      .doc(board.id)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task),
      });
  }
}
