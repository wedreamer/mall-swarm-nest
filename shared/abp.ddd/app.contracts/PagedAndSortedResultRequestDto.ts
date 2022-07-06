import { IPagedAndSortedResultRequest } from './IPagedAndSortedResultRequest';
import { PagedResultRequestDto } from './PagedResultRequestDto';

export class PagedAndSortedResultRequestDto
    extends PagedResultRequestDto
    implements IPagedAndSortedResultRequest
{
    sorting: string;
}
