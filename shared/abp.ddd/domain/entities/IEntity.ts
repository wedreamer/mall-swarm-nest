export interface IPureEntity {
    getKeys(): Object[];
}

export interface IEntity<T> extends IPureEntity {
    id: T;
}