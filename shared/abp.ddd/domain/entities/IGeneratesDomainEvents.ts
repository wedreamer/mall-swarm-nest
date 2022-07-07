import { DomainEventRecord } from "./GetLocalEvents";

export interface IGeneratesDomainEvents {
    getLocalEvents(): Iterator<DomainEventRecord>;
    getDistributedEvents(): Iterator<DomainEventRecord>;

    clearLocalEvents(): void;
    clearDistributedEvents(): void;
}
