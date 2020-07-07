import {SortRequest} from "./SortRequest";

export class PageableRequest {
  sort: SortRequest;
  pageSize: number;
  pageNumber: number;
  offset:number;
  unpaged:boolean;
  paged:boolean;

  static readonly DEFAULT_PAGE_SIZE = 3;
  static readonly FIRST_PAGE_NUMBER = 0;

  public constructor() {
    this.pageSize = PageableRequest.DEFAULT_PAGE_SIZE;
    this.pageNumber = PageableRequest.FIRST_PAGE_NUMBER;
  }
}
