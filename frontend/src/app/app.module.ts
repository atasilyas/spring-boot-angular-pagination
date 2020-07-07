import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './component/user-list/userlist.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import { AddUserComponent } from './component/add-user/add-user.component';
import {FormsModule} from "@angular/forms";
import {CustomPaginationService} from "./service/custom-pagination-service";
import { CustomPaginationComponent } from './component/custom-pagination/custom-pagination.component';




@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddUserComponent,
    CustomPaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,



  ],
  providers: [UserService, CustomPaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
