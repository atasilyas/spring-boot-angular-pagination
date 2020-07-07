import  { SortRequest } from './SortRequest';
import  { PageableRequest } from './PageableRequest';

export class Page<T> {
  content: Array<T>;
  pageable: PageableRequest;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: SortRequest;
  numberOfElements: number;
  size: number;
  number: number;

  public constructor() {
    this.pageable = new PageableRequest();
  }
}
