import { IPagedResultRequest } from "./IPagedResultRequest";
import { LimitedResultRequestDto } from "./LimitedResultRequestDto";

export class PagedResultRequestDto
    extends LimitedResultRequestDto implements IPagedResultRequest
{
    public skipCount: number;
}