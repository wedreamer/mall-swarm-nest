import { IEntity, IPureEntity } from '../entities/IEntity';
import { IBasicRepository, IBasicRepositoryTKey } from './IBasicRepository';
import {
    IReadOnlyRepository,
    IReadOnlyRepositoryTKey,
} from './IReadOnlyRepository';

type expression<IInput, IOut> = (entity: IInput) => IOut;

export interface IPureRepository {}

export interface IRepository<TEntity extends IPureEntity>
    extends IReadOnlyRepository<TEntity>,
        IBasicRepository<TEntity> {
    delete(entity: TEntity, autoSave: boolean): Promise<void>;
}

export interface IRepositoryTKey<TEntity extends IEntity<TKey>, TKey>
    extends IReadOnlyRepositoryTKey<TEntity, TKey>,
        IBasicRepositoryTKey<TEntity, TKey> {
}
