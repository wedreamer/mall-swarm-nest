import { Entity, PureEntity } from "./Entity";
import { DomainEventRecord } from "./GetLocalEvents";
import { IAggreateRoot, IPureAggreateRoot } from "./IAggreateRoot";
import { IGeneratesDomainEvents } from "./IGeneratesDomainEvents";

export abstract class PureBasicAggregateRoot
    extends PureEntity
    implements IGeneratesDomainEvents, IPureAggreateRoot
{
    private readonly _distributedEvents: DomainEventRecord[] = [];
    private readonly _localEvents: DomainEventRecord[] = [];

    getLocalEvents(): Iterator<DomainEventRecord> {
        return this._localEvents[Symbol.iterator]();
    }

    getDistributedEvents(): Iterator<DomainEventRecord> {
        return this._distributedEvents[Symbol.iterator]();
    }

    clearLocalEvents(): void {
        this._localEvents.length = 0;
    }

    clearDistributedEvents(): void {
        this._distributedEvents.length = 0;
    }

    addLocalEvent(eventData: object): void {
        const _event = new DomainEventRecord(JSON.stringify(eventData));
        this._localEvents.push(_event);
    }

    addDistributedEvent(eventData: object): void {
        const _event = new DomainEventRecord(JSON.stringify(eventData));
        this._distributedEvents.push(_event);
    }
}

export abstract class BasicAggregateRoot<TKey>
    extends Entity<TKey>
    implements IGeneratesDomainEvents, IAggreateRoot<TKey>
{
    private readonly _distributedEvents: DomainEventRecord[] = [];
    private readonly _localEvents: DomainEventRecord[] = [];

    getLocalEvents(): Iterator<DomainEventRecord> {
        return this._localEvents[Symbol.iterator]();
    }

    getDistributedEvents(): Iterator<DomainEventRecord> {
        return this._distributedEvents[Symbol.iterator]();
    }

    clearLocalEvents(): void {
        this._localEvents.length = 0;
    }

    clearDistributedEvents(): void {
        this._distributedEvents.length = 0;
    }

    addLocalEvent(eventData: object): void {
        const _event = new DomainEventRecord(JSON.stringify(eventData));
        this._localEvents.push(_event);
    }

    addDistributedEvent(eventData: object): void {
        const _event = new DomainEventRecord(JSON.stringify(eventData));
        this._distributedEvents.push(_event);
    }
}