import { IEntityDto } from "./IEntityDto";

export abstract class ExtensibleEntityDto<TKey> implements IEntityDto<TKey> {

    get id(): TKey {
        return this.id;
    }

    set id(value: TKey) {
        this.id = value;
    }

    public toString(): string {
        return `DTO: ${this.constructor.name} Id: ${this.id}`;
    }
}