import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";
import {PageableRequest} from "../pagination/PageableRequest";
import {Page} from "../pagination/Page";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private usersaveUrl : string;
  constructor(private  http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/findAll';
    this.usersaveUrl ='http://localhost:8081/addUser';
  }

  public findAll(pageable: PageableRequest): Observable<Page<User>> {
    let url = this.usersUrl
      + '?pageNo=' + pageable.pageNumber
      + '&pageSize=' + pageable.pageSize
      + '&sortBy=id';
    return this.http.get<Page<User>>(url);
  }

  public save(user: User){
    return this.http.post<User>(this.usersaveUrl, user);
  }
}
