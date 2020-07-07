import { Injectable } from '@angular/core';
import {Page} from "../pagination/Page";
import {PageableRequest} from "../pagination/PageableRequest";

@Injectable({
  providedIn: 'root'
})
export class CustomPaginationService {

  constructor() { }

  public getNextPage(page: Page<any>): PageableRequest {
    if(!page.last) {
      page.pageable.pageNumber = page.pageable.pageNumber+1;
    }
    return page.pageable;
  }

  public getPreviousPage(page: Page<any>): PageableRequest {
    if(!page.first) {
      page.pageable.pageNumber = page.pageable.pageNumber-1;
    }
    return page.pageable;
  }

  public getPageInNewSize(page: Page<any>, pageSize: number): PageableRequest {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = PageableRequest.FIRST_PAGE_NUMBER;

    return page.pageable;
  }
}
