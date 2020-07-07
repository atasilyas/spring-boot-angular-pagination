import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserlistComponent} from "./component/user-list/userlist.component";
import {AddUserComponent} from "./component/add-user/add-user.component";

const routes: Routes = [
  { path: 'users', component: UserlistComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: '', component: UserlistComponent },
  { path: '**', component: UserlistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
