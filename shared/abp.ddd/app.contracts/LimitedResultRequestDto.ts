import { ILimitedResultRequest } from "./ILimitedResultRequest";

export class LimitedResultRequestDto implements ILimitedResultRequest {
    public static readonly defaultMaxResultCount = 100;
    public maxResultCount: number =
        LimitedResultRequestDto.defaultMaxResultCount;
}