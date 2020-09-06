import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './boards/board-list/board-list.component';
import { LogInPageComponent } from './auth/log-in-page/log-in-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full'
  },
  {
    path: 'boards',
    component: BoardListComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LogInPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
