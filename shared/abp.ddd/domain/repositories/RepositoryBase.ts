import { IEntity, IPureEntity } from "../entities/IEntity";
import { BasicRepositoryBase, BasicRepositoryBaseTKey } from "./BasicRepositoryBase";
import { IRepository } from "./IRepository";

export abstract class RepositoryBase<TEntity extends IPureEntity>
    extends BasicRepositoryBase<TEntity>
    implements IRepository<TEntity>
{
}

export abstract class RepositoryBaseTKey<TEntity extends IEntity<TKey>, TKey>
    extends BasicRepositoryBaseTKey<TEntity, TKey>
    implements IRepository<TEntity> {}