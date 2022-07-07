export class DomainEventRecord {
    eventData: string;
    eventOrder: string;

    constructor(eventData: string) {
        this.eventData = eventData;
    }
}