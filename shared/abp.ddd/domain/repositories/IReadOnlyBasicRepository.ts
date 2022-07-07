import { IEntity, IPureEntity } from "../entities/IEntity";
import { IPureRepository } from "./IRepository";

export interface IReadOnlyBasicRepository<TEntity extends IPureEntity> extends IPureRepository {
    getList(includeDetails: boolean): Promise<TEntity[]>;
    getCount(): Promise<number>;
    getPagedList(skipCount: number, maxResultCount: number, sorting: string, includeDetails: boolean): Promise<TEntity[]>;
}

export interface IReadOnlyBasicRepositoryTKey<TEntity extends IEntity<TKey>, TKey>
    extends Omit<IReadOnlyBasicRepository<TEntity>, 'getList'> {
    getList(includeDetails: boolean): Promise<TEntity[]>;
    getList(ids: TKey[], includeDetails: boolean): Promise<TEntity[]>;
    get(id: TKey, includeDetails: boolean): Promise<TEntity[]>;
    find(id: TKey, includeDetails: boolean): Promise<TEntity>;
}
