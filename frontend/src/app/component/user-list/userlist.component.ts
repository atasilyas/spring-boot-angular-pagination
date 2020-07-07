import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {CustomPaginationService} from "../../service/custom-pagination-service";
import {Page} from "../../pagination/Page";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  page: Page<User> = new Page();
  users: Array<User> =  new Array<User>();


  constructor(private userService: UserService, private paginationService: CustomPaginationService) {
  }


  ngOnInit() {
    this.findAll();
  }

  private findAll(): void {
    this.userService.findAll(this.page.pageable)
      .subscribe(page => {
          this.page = page;
      }
      );
  }

  public getNextPage(): void {
    this.page.pageable = this.paginationService.getNextPage(this.page);
    this.findAll();
  }

  public getPreviousPage(): void {
    this.page.pageable = this.paginationService.getPreviousPage(this.page);
    this.findAll();
  }

  public getPageInNewSize(pageSize: number): void {
    this.page.pageable = this.paginationService.getPageInNewSize(this.page, pageSize);
    this.findAll();
  }

}
