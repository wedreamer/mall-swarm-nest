import { IPagedResult } from "./IPagedResult";
import { ListResultDto } from "./ListResultDto";

export class PagedResultDto<T> extends ListResultDto<T> implements IPagedResult<T> {
    totalCount: number;
}