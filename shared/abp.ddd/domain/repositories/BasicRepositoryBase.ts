import { IEntity, IPureEntity } from '../entities/IEntity';
import { IBasicRepository, IBasicRepositoryTKey } from './IBasicRepository';

export abstract class BasicRepositoryBase<TEntity extends IPureEntity>
    implements IBasicRepository<TEntity>
{
    abstract insert(entity: TEntity, autoSave: boolean): Promise<TEntity>;
    abstract insertMany(entities: TEntity[], autoSave: boolean): Promise<void>;

    abstract update(entity: TEntity, autoSave: boolean): Promise<TEntity>;

    abstract updateMany(entity: TEntity [], autoSave: boolean): Promise<void>;

    abstract delete(entity: TEntity, autoSave: boolean): Promise<void>;

    abstract deleteMany(entity: TEntity [], autoSave: boolean): Promise<void>;

    abstract getList(includeDetails: boolean): Promise<TEntity[]>;

    abstract getCount(): Promise<number>;

    abstract getPagedList(
        skipCount: number,
        maxResultCount: number,
        sorting: string,
        includeDetails: boolean
    ): Promise<TEntity[]>;
}

export abstract class BasicRepositoryBaseTKey<TEntity extends IEntity<TKey>, TKey>
    implements IBasicRepositoryTKey<TEntity, TKey>
{
    abstract get(id: TKey, includeDetails: boolean): Promise<TEntity[]>;

    abstract find(id: TKey, includeDetails: boolean): Promise<TEntity>;

    abstract insert(entity: TEntity, autoSave: boolean): Promise<TEntity>;
    abstract insertMany(entities: TEntity[], autoSave: boolean): Promise<void>;

    abstract update(entity: TEntity, autoSave: boolean): Promise<TEntity>;

    abstract updateMany(entity: TEntity[], autoSave: boolean): Promise<void>;

    abstract delete(id: TKey, autoSave: boolean): Promise<void>;
    abstract delete(entity: TEntity, autoSave: boolean): Promise<void>;

    abstract deleteMany(ids: TKey[], autoSave: boolean): Promise<void>;
    abstract deleteMany(entities: TEntity[], autoSave: boolean): Promise<void>;

    abstract getList(ids: TKey[], includeDetails: boolean): Promise<TEntity[]>;
    abstract getList(includeDetails: boolean): Promise<TEntity[]>;

    abstract getCount(): Promise<number>;

    abstract getPagedList(
        skipCount: number,
        maxResultCount: number,
        sorting: string,
        includeDetails: boolean
    ): Promise<TEntity[]>;
}
