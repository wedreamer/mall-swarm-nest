import { IEntity, IPureEntity } from '../entities/IEntity';
import { IReadOnlyBasicRepository, IReadOnlyBasicRepositoryTKey } from './IReadOnlyBasicRepository';

export interface IReadOnlyRepository<TEntity extends IPureEntity>
    extends IReadOnlyBasicRepository<TEntity> {
    getList(includeDetails: boolean): Promise<TEntity[]>;
    getCount(): Promise<number>;
    getPagedList(
        skipCount: number,
        maxResultCount: number,
        sorting: string,
        includeDetails: boolean
    ): Promise<TEntity[]>;
}

export interface IReadOnlyRepositoryTKey<TEntity extends IEntity<TKey>, TKey>
    extends IReadOnlyBasicRepositoryTKey<TEntity, TKey> {
    getList(includeDetails: boolean): Promise<TEntity[]>;
    getList(ids: TKey[], includeDetails: boolean): Promise<TEntity[]>;
    find(id: TKey, includeDetails: boolean): Promise<TEntity>;
}
