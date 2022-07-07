import { IEntity, IPureEntity } from "./IEntity";

export interface IPureAggreateRoot extends IPureEntity {

}

export interface IAggreateRoot<TKey> extends IEntity<TKey>, IPureAggreateRoot {}