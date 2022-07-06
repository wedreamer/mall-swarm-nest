import { IListResult } from "./IListResult";

export class ListResultDto<T> implements IListResult<T> {
    items: T[];
}