import { IPagedResultRequest } from "./IPagedResultRequest";
import { ISortedResultRequest } from "./ISortedResultRequest";

export interface IPagedAndSortedResultRequest
    extends IPagedResultRequest,
        ISortedResultRequest {}
