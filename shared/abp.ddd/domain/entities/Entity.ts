import { IEntity, IPureEntity } from "./IEntity";

export abstract class PureEntity implements IPureEntity {
    abstract getKeys(): object[];

    public tostring(): string {
        return `[ENTITY: ${this.constructor.name} Keys = ${JSON.stringify(this.getKeys())}]`;
    }

    public entityEquals(other: PureEntity): boolean {
        // TODO: 
        return true;
    }
}

export abstract class Entity<TKey> extends PureEntity implements IEntity<TKey> {
    id: TKey;

    public getKeys(): Object[] {
        return [this.id as Object];
    }

    public tostring(): string {
        return `[ENTITY: ${this.constructor.name} Keys = ${JSON.stringify(
            this.getKeys()
        )}]`;
    }
}