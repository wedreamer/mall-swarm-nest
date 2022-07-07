import { IEntity, IPureEntity } from '../entities/IEntity';
import {
    IReadOnlyBasicRepository,
    IReadOnlyBasicRepositoryTKey,
} from './IReadOnlyBasicRepository';

export interface IBasicRepository<TEntity extends IPureEntity>
    extends IReadOnlyBasicRepository<TEntity> {
    insert(entity: TEntity, autoSave: boolean): Promise<TEntity>;
    insertMany(entities: TEntity[], autoSave: boolean): Promise<void>;
    update(entity: TEntity, autoSave: boolean): Promise<TEntity>;
    updateMany(entity: TEntity [], autoSave: boolean): Promise<void>;
    delete(entity: TEntity, autoSave: boolean): Promise<void>;
    deleteMany(entity: TEntity [], autoSave: boolean): Promise<void>;
}

export interface IBasicRepositoryTKey<TEntity extends IEntity<TKey>, TKey>
    extends Omit<IBasicRepository<TEntity>, 'getList'>,
        IReadOnlyBasicRepositoryTKey<TEntity, TKey> {
    delete(entity: TEntity, autoSave: boolean): Promise<void>;
    delete(id: TKey, autoSave: boolean): Promise<void>;
    deleteMany(entity: TEntity[], autoSave: boolean): Promise<void>;
    deleteMany(ids: TKey[], autoSave: boolean): Promise<void>;
}
