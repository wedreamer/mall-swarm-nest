export interface IEntityDto<TKey> {
    id: TKey;
    toString(): string;
}
